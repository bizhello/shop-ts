/* eslint-disable prettier/prettier */
import './assets/App.css';

import React, { FC, useState } from 'react';

import Card from './components/Card';
import HeaderWithAuth from './components/Header/withAuth';
import HeaderWithoutAuth from './components/Header/withoutAuth';
import Popup from './components/Popup';
import SearchInput from './components/SearchInput';
import SelectWithButton from './components/SelectWithButton';

const App: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isAuth, setIsAuth] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState({ name: 'Andrey' });

  return (
    <div className="App">
      {isAuth ? <HeaderWithAuth userName={user.name} /> : <HeaderWithoutAuth />}
      <body className='Body'>
        <SearchInput />
        <SelectWithButton />
        <Card />
        <Popup />
      </body>
    </div>
  );
};

export default App;
