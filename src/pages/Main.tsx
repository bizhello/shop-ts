import '../assets/App.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { FC, useCallback, useEffect, useState, useMemo } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { SortEnum } from '../common/enums'
import { ICard, ICardDto, IChangeCard } from '../common/interfaces/ICard';
import Card from '../components/Card';
import HeaderWithAuth from '../components/Header/withAuth';
import HeaderWithoutAuth from '../components/Header/withoutAuth';
import Popup from '../components/Popup';
import SearchInput from '../components/SearchInput';
import SelectWithButton from '../components/SelectWithButton';
import CardService from '../services/CardService';
import ImageService from '../services/ImageService';

const Main: FC = () => {

  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(true);
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
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortedCards, setSortedCards] = useState<SortEnum>(SortEnum.dataCreatedAt);

  const changeSearchValue = useCallback((value: string): void => {
    setSearchValue(value);
  }, []);

  const changeSortedCards = useCallback((value: SortEnum): void => {
    setSortedCards(value)
  }, [])

  const sortCards = useMemo((): ICard[] | [] => {
    if (0 < cards.length) {
      const newCards: ICard[] | [] = Object.assign([], cards);

      switch (sortedCards) {
        case SortEnum.dataStart:
          return newCards.sort((a, b) => a.dateFrom.getTime() - b.dateFrom.getTime());
        case SortEnum.dataEnd:
          return newCards.sort((a, b) => a.dateTo.getTime() - b.dateTo.getTime());
        default:
          return cards
      }
    }
    return []
  }, [cards, sortedCards])

  const searchCards = useMemo((): ICard[] => {
    if (searchValue) {
      return sortCards?.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return sortCards;
  }, [searchValue, cards, sortCards]);

  const togglePopup = (): void => {
    setPopupIsOpen(prev => !prev)
  }

  const createCard = useCallback(async (cardDto: ICardDto): Promise<ICard | null> => {
    try {
      const newCard = await CardService.createCard(cardDto);
      setCards([...cards, newCard]);
      return newCard;
    } catch (e) {
      toast("Не удалось создать карточку товара!");
      return null;
    }
  }, [cards])

  const uploadImage = useCallback(async (idCard: string, body: FormData): Promise<void> => {
    try {
      await ImageService.createImageCard(idCard, body);
    } catch {
      toast("Не удалось загрузить картинку товар!");
    }
  }, [])

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

  const removeCard = useCallback(async (idCard: string): Promise<void> => {
    try {
      Promise.all([CardService.removeCard(idCard), ImageService.removeCardImage(idCard)])
      setCards(cards.filter(card => card.id !== idCard))
    } catch {
      toast("Не удалось удалить товара!");
    }
  }, [cards])


  const changeValuePopup = useCallback((value: IChangeCard): void => {
    setValuePopup({ ...valuePopup, ...value })
  }, [valuePopup])

  const fetchCards = useCallback(async (): Promise<void> => {
    setIsLoad(true);
    try {
      const dataCards = await CardService.getCards();
      setCards(dataCards.map((item) => {
        return ({ ...item, dateFrom: new Date(item.dateFrom), dateTo: new Date(item.dateTo) })
      }))
    } catch (error) {
      toast("Не удалось загрузить товар!");
    } finally {
      setIsLoad(false);
    }
  }, [])

  useEffect(() => {
    fetchCards();
  }, [fetchCards])

  return (
    <div className="main">
      {isAuth ? <HeaderWithAuth userName={user.name} /> : <HeaderWithoutAuth />}
      <body className='Body'>
        <SearchInput changeSearchValue={changeSearchValue} searchValue={searchValue} />
        <SelectWithButton togglePopup={togglePopup} sortedCards={sortedCards} changeSortedCards={changeSortedCards} />
        {!isLoad && searchCards && searchCards.map(card => (
          <Card key={card.id} togglePopup={togglePopup} changeValuePopup={changeValuePopup} card={card} incrementCard={incrementCard} decrementCard={decrementCard} removeCard={removeCard} />
        ))}
        {!isLoad && searchCards?.length === 0 && <h2 style={{ margin: '2em' }}>Товар не найден</h2>}
        {isPopupOpen && <Popup togglePopup={togglePopup} changeValuePopup={changeValuePopup} valuePopup={valuePopup} changeCard={changeCard} createCard={createCard} uploadImage={uploadImage} />}
        <ToastContainer />
      </body>
    </div>
  );
}

export default Main;