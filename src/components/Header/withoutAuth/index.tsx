/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React, { FC } from 'react';

import Button from '../../shared/Button';
import Header from '..';

const HeaderWithoutAuth: FC = () => {
  return (
    <Header>
      <Button text={'SIGN IN'} handleClick={() => console.log('Click')}/>
      <Button text={'SIGN UP'} handleClick={() => console.log('Click')}/>
    </Header>
  );
};

export default HeaderWithoutAuth;
