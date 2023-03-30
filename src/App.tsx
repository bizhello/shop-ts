/* eslint-disable prettier/prettier */
import './assets/App.css';

import React, { FC, useState } from 'react';

import HeaderWithAuth from './components/Header/withAuth';
import HeaderWithoutAuth from './components/Header/withoutAuth';

const App: FC = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      {isAuth ? <HeaderWithAuth userName={'Andrey'} /> : <HeaderWithoutAuth />}
      <button onClick={() => setIsAuth((prev) => !prev)}>
        Поменять АВТОРИЗАЦИЮ
      </button>
    </div>
  );
};

export default App;
