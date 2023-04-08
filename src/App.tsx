/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable prettier/prettier */
import './assets/App.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { FC, useCallback, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { ICard, IChangeCard } from './common/interfaces/ICard';
import Card from './components/Card';
import HeaderWithAuth from './components/Header/withAuth';
import HeaderWithoutAuth from './components/Header/withoutAuth';
import Popup from './components/Popup';
import SearchInput from './components/SearchInput';
import SelectWithButton from './components/SelectWithButton';
import CardService from './services/CardService';

const App: FC = () => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [user, setUser] = useState({ name: 'Andrey' });
  const [cards, setCards] = useState<ICard[] | null>(null);
  const [isPopupOpen, setPopupIsOpen] = useState<boolean>(false);
  const [valuePopup, setValuePopup] = useState<IChangeCard>({
    id: 1231,
    url: '',
    title: '',
    price: null,
    dateFrom: null,
    dateTo: null,
    count: null,
  });

  const togglePopup = () => {
    setPopupIsOpen(prev => !prev)
  }

  const decrementCard = useCallback(async (idCard: number): Promise<void> => {
    try {
      await CardService.cardDecrement(idCard);
    } catch (e) {
      toast("Не удалось увеличить кол-во товара!");
    }
  }, [])

  const changeValuePopup = (value: IChangeCard) => {
    setValuePopup({ ...valuePopup, ...value })
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

  useEffect(() => {
    fetchCards();
  }, [fetchCards, decrementCard])

  return (
    <div className="App">
      {isAuth ? <HeaderWithAuth userName={user.name} /> : <HeaderWithoutAuth />}
      <body className='Body'>
        <SearchInput />
        <SelectWithButton togglePopup={togglePopup} />
        {!isLoad && cards && cards.map(card => (
          <Card key={card.id} togglePopup={togglePopup} changeValuePopup={changeValuePopup} card={card} />
        ))}
        {!isLoad && cards?.length === 0 && <h2 style={{ margin: '2em' }}>Товар не найден</h2>}
        {isPopupOpen && <Popup togglePopup={togglePopup} changeValuePopup={changeValuePopup} valuePopup={valuePopup} />}
        <ToastContainer />
      </body>
    </div>
  );
};

export default App;
