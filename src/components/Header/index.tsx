/* eslint-disable prettier/prettier */
import React, { FC } from 'react';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Header: FC<IProps> = ({ children }) => {
  return (
    <header>
      <div>
        <button>БУРГЕР</button>
        <h3>Shop</h3>
      </div>
      <div>{children}</div>
    </header>
  );
};

export default Header;
