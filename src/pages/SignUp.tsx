import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useInput from "../hooks/useInput";

const SignUp = () => {
  const loginInput = useInput('', { isEmpty: true, isEmail: true });
  const passwordInput = useInput('', { isEmpty: true, minLength: 4, maxLength: 30 });
  const nameInput = useInput('', { isEmpty: true, minLength: 4, maxLength: 30 });
  const [isClosePassword, setIsClosePassword] = useState<boolean>(true);

  return (
    <>
      <header className="header auth__header">
        <h2 className='header__title'>SHOP FAMILY</h2>
      </header>
      <div className="auth">
        <form className="auth__form" autoComplete="false">
          <h3 className='auth__title'>Регистрация</h3>
          <div className="auth__group">
            <input type='text' name='name' id='register__name' className="auth__input auth__name" autoComplete='off' value={nameInput.value} onBlur={nameInput.onBlur} onChange={(e) => nameInput.onChange(e)} />
            <label htmlFor='register__name' className={nameInput.value ? 'auth__label auth__label-filled' : "auth__label auth__label-empty"}>Имя</label>
            {nameInput.isDirty && nameInput.errorArray.length > 0 && <span className="auth__error">{nameInput.errorArray[0]}</span>}
          </div>
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
          </div>
          <button className="auth__button">зарегистрироваться</button>
          <NavLink className="option__forgot" to="../signIn">У меня уже есть акаунт</NavLink>
        </form>
      </div>
    </>
  );
}

export default SignUp;
