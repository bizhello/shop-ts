import React, { FC } from 'react';

import { TextEnum } from '../../../common/enums';
import Header from '../index';

const HeaderWithoutAuth: FC = () => {
  return (
    <Header>
      <ul className='header__list'>
        <li className='header__item'>
          <button className='item__button'>{TextEnum.SIGN_IN}</button>
        </li>
        <li className='header__item'>
          <button className='item__button'>{TextEnum.SIGN_UP}</button>
        </li>
      </ul>
    </Header>
  );
};

export default HeaderWithoutAuth;
