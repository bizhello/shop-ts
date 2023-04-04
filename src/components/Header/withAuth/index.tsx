/* eslint-disable prettier/prettier */
import React, { FC } from 'react';

import { TextEnum } from '../../../common/enums';
import Header from '..';

interface IProps {
  userName: string;
}

const HeaderWithAuth: FC<IProps> = ({ userName }) => {
  return (
    <Header>
      <p className="header__text">
        {TextEnum.WELCOME} <span style={{ fontSize: '1.2em', marginLeft: '18px', fontWeight: '700' }}>{userName}</span>
      </p>
      <button className="item__button" style={{ backgroundColor:'red', border:'none', width: '70px' }}>{TextEnum.EXIT}</button>
    </Header>
  );
};

export default HeaderWithAuth;
