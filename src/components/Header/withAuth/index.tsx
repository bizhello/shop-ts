/* eslint-disable prettier/prettier */
import React, { FC } from 'react';

import { TextEnum } from '../../../common/enums';
import Header from '..';

interface IProps {
  logout: () => Promise<void>;
}

const HeaderWithAuth: FC<IProps> = ({ logout }) => {
  return (
    <Header>
      <p className="header__text">
        {TextEnum.WELCOME}{' '}
        <span
          style={{ fontSize: '1.2em', marginLeft: '18px', fontWeight: '700' }}
        >
          {'' || localStorage.getItem('user-firstName')}
        </span>
      </p>
      <button
        className="item__button"
        style={{ backgroundColor: 'red', border: 'none', width: '70px' }}
        onClick={() => logout()}
      >
        {TextEnum.EXIT}
      </button>
    </Header>
  );
};

export default HeaderWithAuth;
