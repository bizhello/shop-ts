/* eslint-disable prettier/prettier */
import React, { FC } from 'react';

import StyledButton from './button.style';
import { IButton } from './interfaces';

const Button: FC<IButton> = ({ handleClick, text, ariaAttributes }) => (
  <StyledButton onClick={handleClick} {...ariaAttributes}>
    {text}
  </StyledButton>
);

export default Button;
