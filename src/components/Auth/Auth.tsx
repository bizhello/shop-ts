import React, { FC, useState } from "react";

interface IProps {
  chilndren: JSX.Element
}

const Auth: FC<IProps> = ({ chilndren }) => {
  return (
    <>
      <header className="header auth__header">
        <h2 className='header__title'>SHOP FAMILY</h2>
      </header>
      <div className="auth">
        <form className="auth__form" autoComplete="false">
          {chilndren}
        </form>
      </div>
    </>
  );
}

export default Auth;