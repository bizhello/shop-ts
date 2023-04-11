/* eslint-disable prettier/prettier */
import './assets/App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import React, { FC, useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { toast, ToastContainer } from 'react-toastify';

import { ICard, IChangeCard } from './common/interfaces/ICard';
import Card from './components/Card';
import HeaderWithAuth from './components/Header/withAuth';
import HeaderWithoutAuth from './components/Header/withoutAuth';
import Popup from './components/Popup';
import SearchInput from './components/SearchInput';
import SelectWithButton from './components/SelectWithButton';
import CardService from './services/CardService';
import ImageService from './services/ImageService';

const App: FC = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuth, setIsAuth] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState({ name: 'Andrey' });
  const [cards, setCards] = useState<ICard[] | []>([]);
  const [isPopupOpen, setPopupIsOpen] = useState<boolean>(false);
  const [valuePopup, setValuePopup] = useState<IChangeCard>({
    id: '',
    title: '',
    price: null,
    dateFrom: null,
    dateTo: null,
    count: null,
  });

  const togglePopup = () => {
    setPopupIsOpen(prev => !prev)
  }
  const fetchCards = useCallback(async () => {
    setIsLoad(true);
    try {
      const dataCards = await CardService.getCards();
      setCards(dataCards);
    } catch (error) {
      toast("Не удалось загрузить товар!");
    } finally {
      setIsLoad(false);
    }
  }, [])

  const decrementCard = useCallback(async (idCard: string): Promise<void> => {
    try {
      await CardService.decrementCard(idCard);
      const newCards = cards.map((card) => {
        let newCount = card.count;
        if (card.id === idCard) {
          newCount -= 1;
        }

        return { ...card, count: newCount }
      })

      setCards(newCards || null)
    } catch (e) {
      toast("Не удалось уменьшить кол-во товара!");
    }
  }, [cards])

  const incrementCard = useCallback(async (idCard: string): Promise<void> => {
    try {
      await CardService.incrementCard(idCard);
      const newCards = cards.map((card) => {
        let newCount = card.count;
        if (card.id === idCard) {
          newCount += 1;
        }

        return { ...card, count: newCount }
      })

      setCards(newCards || null)
    } catch (e) {
      toast("Не удалось увеличить кол-во товара!");
    }
  }, [cards])

  const removeCard = async (idCard: string): Promise<void> => {
    try {
      // eslint-disable-next-line promise/catch-or-return
      Promise.all([CardService.removeCard(idCard), CardService.removeCardImage(idCard)])
    } catch {
      toast("Не удалось удалить товара!");
    }
  }

  const changeCard = useCallback(async (card: ICard): Promise<void> => {
    try {
      await CardService.changeCard(card);
      const indexCard = cards.findIndex(
        (item) => item.id === card.id
      );
      const copyCards = cards.slice(0);
      copyCards[indexCard] = card;
      setCards(copyCards)
    }
    catch (e) {
      toast("Не удалось изменить товар!");
    }
  }, [cards])

  const uploadImage = useCallback(async (idCard: string, body: FormData): Promise<void> => {
    try {
      await ImageService.createImageCard(idCard, body);
    } catch {
      toast("Не удалось загрузить картинку товар!");
    }
  }, [])

  const changeValuePopup = useCallback((value: IChangeCard) => {
    setValuePopup({ ...valuePopup, ...value })
  }, [valuePopup])

  useEffect(() => {
    fetchCards();
  }, [fetchCards])

  return (
    <div className="App">
      {isAuth ? <HeaderWithAuth userName={user.name} /> : <HeaderWithoutAuth />}
      <body className='Body'>
        <SearchInput />
        <SelectWithButton togglePopup={togglePopup} />
        {!isLoad && cards && cards.map(card => (
          <Card key={card.id} togglePopup={togglePopup} changeValuePopup={changeValuePopup} card={card} incrementCard={incrementCard} decrementCard={decrementCard} removeCard={removeCard} />
        ))}
        {!isLoad && cards?.length === 0 && <h2 style={{ margin: '2em' }}>Товар не найден</h2>}
        {isPopupOpen && <Popup togglePopup={togglePopup} changeValuePopup={changeValuePopup} valuePopup={valuePopup} changeCard={changeCard} uploadImage={uploadImage} />}
        <ToastContainer />
      </body>
    </div>
  );
};

export default App;
