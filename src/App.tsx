/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import './assets/App.css';

import React, { FC, useState } from 'react';

import { ICard, IChangeCard } from './common/interfaces/ICard';
import Card from './components/Card';
import HeaderWithAuth from './components/Header/withAuth';
import HeaderWithoutAuth from './components/Header/withoutAuth';
import Popup from './components/Popup';
import SearchInput from './components/SearchInput';
import SelectWithButton from './components/SelectWithButton';

const App: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [user, setUser] = useState({ name: 'Andrey' });
  const [isPopupOpen, setPopupIsOpen] = useState<boolean>(false);
  const [valuePopup, setValuePopup] = useState<IChangeCard>({
    id: 1231,
    url: '',
    title: '',
    price: null,
    dateFrom: '',
    dateTo: '',
    count: null,
  });

  const cards = [
    {
      id: 123812,
      url: 'https://www.w3schools.com/images/w3schools_green.jpg',
      title: 'БАЛТИКА 0',
      price: 12,
      dateFrom: '2022-10-22',
      dateTo: '2022-12-22',
      count: 12,
    },
  ];

  const toggelePopup = () => {
    setPopupIsOpen(prev => !prev)
  }

  const changeValuePopup = (value: IChangeCard) => {
    setValuePopup({ ...valuePopup, ...value })
  }

  return (
    <div className="App">
      {isAuth ? <HeaderWithAuth userName={user.name} /> : <HeaderWithoutAuth />}
      <body className='Body'>
        <SearchInput />
        <SelectWithButton toggelePopup={toggelePopup} />
        {cards.map(card => (
          <Card key={card.id} toggelePopup={toggelePopup} changeValuePopup={changeValuePopup} card={card} />
        ))}
        {isPopupOpen && <Popup toggelePopup={toggelePopup} changeValuePopup={changeValuePopup} valuePopup={valuePopup} />}
      </body>
    </div>
  );
};

export default App;
