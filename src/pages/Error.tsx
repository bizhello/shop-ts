import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const Error = () => {

  const error: any = useRouteError();

  return (
    // <div id="error-page">
    //   <h1>Oops!</h1>
    //   <p>Sorry, an unexpected error has occurred.</p>
    //   <p>
    //     {/* <i>{error.statusText || error.message}</i> */}
    //   </p>
    // </div>
    <section className="error">
      <h2 className="error__title">404</h2>
      <p className="error__text">Страница не найдена</p>

      <NavLink className="error__back" to="../">Назад</NavLink>
    </section>
  )
}

export default Error;
