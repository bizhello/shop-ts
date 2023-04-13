import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useInput from "../hooks/useInput";

const SignIn = () => {
  const loginInput = useInput('', { isEmpty: true, isEmail: true });
  const passwordInput = useInput('', { isEmpty: true, minLength: 4, maxLength: 30 });
  const [isClosePassword, setIsClosePassword] = useState<boolean>(true);

  return (
    <>
      <header className="header auth__header">
        <h2 className='header__title'>SHOP FAMILY</h2>
      </header>
      <div className="auth">
        <form className="auth__form" autoComplete="false">
          <h3 className='auth__title'>Вход в систему</h3>
          <div className="auth__group">
            <input type='email' name='email' id='login__email' className="auth__input auth__email " autoComplete='off' value={loginInput.value} onBlur={loginInput.onBlur} onChange={(e) => loginInput.onChange(e)} />
            <label htmlFor='login__email' className={loginInput.value ? 'auth__label auth__label-filled' : "auth__label auth__label-empty"}>E-mail</label>
            {loginInput.isDirty && loginInput.errorArray.length > 0 && <span className="auth__error">{loginInput.errorArray[0]}</span>}
          </div>
          <div className="auth__group">
            <input name='password' type={isClosePassword ? 'password' : 'text'} id='login__password' className="auth__input auth__password" autoComplete="current-password webauthn" value={passwordInput.value} onBlur={passwordInput.onBlur} onChange={(e) => passwordInput.onChange(e)} />
            <label htmlFor='login__password' className={passwordInput.value ? 'auth__label auth__label-filled' : "auth__label auth__label-empty"} >Пароль</label>
            {passwordInput.isDirty && passwordInput.errorArray.length > 0 && <span className="auth__error">{passwordInput.errorArray[0]}</span>}
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
          <NavLink className="option__forgot" to="../signUp">У меня еще нет акаунта</NavLink>
        </form>
      </div>
    </>
  );
}

export default SignIn;