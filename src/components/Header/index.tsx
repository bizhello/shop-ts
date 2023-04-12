import React, { FC } from 'react';

import { TextEnum } from '../../common/enums';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Header: FC<IProps> = ({ children }) => {
  return (
    <header className="header">
      <div className="header__group header__group-menu-with-title">
        <button className="header__menu" />
        <h3 className='header__title'>{TextEnum.TITLE}</h3>
      </div>
      <div className="header__group">{children}</div>
    </header>
  );
};

export default Header;
