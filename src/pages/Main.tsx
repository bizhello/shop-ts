/* eslint-disable prettier/prettier */
import '../assets/App.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { FC, useCallback, useEffect, useState } from 'react';
import { Navigate, useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { SortEnum } from '../common/enums'
import { ICard, ICardDto, IChangeCard } from '../common/interfaces/ICard';
import Card from '../components/Card';
import HeaderWithAuth from '../components/Header/withAuth';
import Popup from '../components/Popup';
import SearchInput from '../components/SearchInput';
import SelectWithButton from '../components/SelectWithButton';
import useCards from '../hooks/useCards';
import usePopup from '../hooks/usePopup';
import AuthService from '../services/AuthService';
import CardService from '../services/CardService';
import ImageService from '../services/ImageService';

const mainLoader = async (): Promise<boolean> => {
  await AuthService.checkAuth();

  return true;
}

export { mainLoader }

const Main: FC = () => {

  const loadAuth = useLoaderData();
  const { isOpenPopup, togglePopup } = usePopup();

  const [totalCountCards, setTotalCountCards] = useState<number>(0)
  const [limitCards, setLimitCards] = useState<number>(10)
  const [pageCards, setPagesCards] = useState<number>(1)


  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [valuePopup, setValuePopup] = useState<IChangeCard>({
    id: '',
    title: '',
    price: null,
    dateFrom: null,
    dateTo: null,
    count: null,
  });
  const [cards, setCards] = useState<ICard[] | []>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortedCards, setSortedCards] = useState<SortEnum>(SortEnum.dataCreatedAt);

  const checkAuth = useCallback(async () => {
    try {
      const response = await AuthService.checkAuth();
      localStorage.setItem('user-id', response.id);
      setIsAuth(true);
    } catch (error) {
      setIsAuth(false);
    }
  }, [])

  const changeSearchValue = useCallback((value: string): void => {
    setSearchValue(value);
  }, []);

  const changeSortedCards = useCallback((value: SortEnum): void => {
    setSortedCards(value)
  }, [])

  const searchCards = useCards(searchValue, cards, sortedCards)

  const createCard = useCallback(async (cardDto: ICardDto, file?: FormData, idCard?: string): Promise<ICard | null> => {
    try {
      await checkAuth()
      if (file && idCard) {
        await ImageService.createImageCard(idCard, file);
        setCards([...cards, { ...cardDto, id: idCard }]);

        return null;
      }
      const newCard = await CardService.createCard(cardDto);

      return newCard;

    } catch (e) {
      toast("Не удалось создать карточку товара!");

      return null;
    }
  }, [cards, checkAuth])

  const changeCard = useCallback(async (card: ICard, file?: FormData): Promise<void> => {
    try {
      await checkAuth()
      if (file) {
        await ImageService.createImageCard(card.id, file);
      } else {
        await CardService.changeCard(card);
      }
      const indexCard = cards.findIndex(
        (item) => item.id === card.id
      );
      const copyCards = cards.slice(0);
      copyCards[indexCard] = card;
      setCards(copyCards)
    } catch (e) {
      toast("Не удалось изменить товар!");
    }
  }, [cards, checkAuth])

  const decrementCard = useCallback(async (idCard: string): Promise<void> => {
    try {
      await checkAuth()
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
  }, [cards, checkAuth])

  const incrementCard = useCallback(async (idCard: string): Promise<void> => {
    try {
      await checkAuth()
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
  }, [cards, checkAuth])

  const removeCard = useCallback(async (idCard: string): Promise<void> => {
    try {
      await checkAuth()
      // eslint-disable-next-line promise/catch-or-return
      Promise.all([CardService.removeCard(idCard), ImageService.removeCardImage(idCard)])
      setCards(cards.filter(card => card.id !== idCard))
    } catch {
      toast("Не удалось удалить товара!");
    }
  }, [cards, checkAuth])


  const changeValuePopup = useCallback((value: IChangeCard): void => {
    setValuePopup({ ...valuePopup, ...value })
  }, [valuePopup])

  const fetchCardsPagination = useCallback(async (): Promise<void> => {
    try {
      const res = await CardService.getCardsPagination(limitCards, pageCards);
      const newCards = await res.json();
      const totalCardsStr = res.headers.get('X-Total-Count');
      let totalCardsNum = 0
      if (totalCardsStr) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        totalCardsNum = Number.parseInt(totalCardsStr, 10);
      }
      setCards([...cards, ...newCards]);
      setTotalCountCards(totalCardsNum)
    } catch (error) {
      toast("Не удалось загрузить товара!");
    }
  }, [])

  const fetchCards = useCallback(async (): Promise<void> => {
    try {
      setIsLoad(true);
      await checkAuth()
      const dataCards = await CardService.getCards();
      setCards(dataCards.map((item) => {
        return ({ ...item, dateFrom: new Date(item.dateFrom), dateTo: new Date(item.dateTo) })
      }))
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      isAuth && toast("Не удалось загрузить товар!");
    } finally {
      setIsLoad(false);
    }
  }, [checkAuth, isAuth])

  const logout = useCallback(async () => {
    try {
      await checkAuth();
      await AuthService.logout();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Не удалось выйти');
    } finally {
      localStorage.clear();
      setIsAuth(false);
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    loadAuth && fetchCards();
  }, [fetchCards, loadAuth])

  if (!loadAuth || !isAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="main">
      <HeaderWithAuth logout={logout} />
      <body className='Body'>
        <SearchInput changeSearchValue={changeSearchValue} searchValue={searchValue} />
        <SelectWithButton togglePopup={togglePopup} sortedCards={sortedCards} changeSortedCards={changeSortedCards} />
        <TransitionGroup>
          {!isLoad && searchCards && searchCards.map(card => (
            <CSSTransition
              key={card.id}
              timeout={500}
              classNames="card">
              <Card togglePopup={togglePopup} changeValuePopup={changeValuePopup} card={card} incrementCard={incrementCard} decrementCard={decrementCard} removeCard={removeCard} />
            </CSSTransition>
          ))}
        </TransitionGroup>
        {!isLoad && searchCards?.length === 0 && <h2 style={{ margin: '2em' }}>Товар не найден</h2>}
        {isOpenPopup && <Popup togglePopup={togglePopup} changeValuePopup={changeValuePopup} valuePopup={valuePopup} changeCard={changeCard} createCard={createCard} />}
        <ToastContainer />
      </body>
    </div>
  );
}

export default Main;
