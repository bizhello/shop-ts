/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from "./pages/Error";
import Login from "./pages/Login";
import Main, { mainLoader } from "./pages/Main";
import Register from "./pages/Register";

const App: FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      loader: mainLoader 
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
