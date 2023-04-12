import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {

  const [value, setValue] = useState<{ login: string, password: string }>({ login: '', password: '' })
  const [isClosePassword, setIsClosePassword] = useState<boolean>(true);

  return (
    <>
      <header className="auth__header">
        <h2 style={{ mixBlendMode: 'screen' }}>SHOP FAMILY</h2>
      </header>
      <div className="auth">
        <form className="auth__form" autoComplete="off">
          <h3 className='auth__title'>Вход в систему</h3>
          <div className="auth__group">
            <input type='text' id='login__email' className="auth__input auth__email " autoComplete='off' value={value.login} onChange={(e) => setValue({ ...value, login: e.target.value })} />
            <label htmlFor='login__email' className={value.login ? 'auth__label auth__label-filled' : "auth__label auth__label-empty"}>E-mail</label>
          </div>
          <div className="auth__group">
            <input type={isClosePassword ? 'password' : 'text'} id='login__password' className="auth__input auth__password" autoComplete="new-password" value={value.password} onChange={(e) => setValue({ ...value, password: e.target.value })} />
            <label htmlFor='login__password' className={value.password ? 'auth__label auth__label-filled' : "auth__label auth__label-empty"} >Пароль</label>
          </div>
          <div className="auth__options">
            <div className="options__group" >
              <input type='checkbox' id='option__open' className="auth__checkbox" checked={!isClosePassword} onChange={() => setIsClosePassword(!isClosePassword)} />
              <label className="auth__checkbox-label" htmlFor='option__open'>Показать пароль</label>
            </div>
            <div className="options__group">
              <input type='checkbox' id='option__save' className="auth__checkbox" />
              <label className="auth__checkbox-label" htmlFor='option__save'>Запомнить меня</label>
            </div>
          </div>
          <button className="auth__button">Войди</button>
          <NavLink className="option__forgot" to="#">Востановить пароль?</NavLink>
        </form>
      </div>
    </>
  );
}

export default SignIn;