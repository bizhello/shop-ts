/* eslint-disable no-console */

/* eslint-disable prettier/prettier */
import React, { FC } from 'react';

import Button from '../../shared/Button';
import Header from '..';

interface IProps {
  userName: string;
}

const HeaderWithAuth: FC<IProps> = ({ userName }) => {
  return (
    <Header>
      <p>
        HELLO <span>{userName}</span>
      </p>
      <Button handleClick={() => console.log('Click')} text={'LOGOUT'} />
    </Header>
  );
};

export default HeaderWithAuth;
