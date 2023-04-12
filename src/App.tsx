import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './pages/Error'
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
    errorElement: <Error />,
  },
]);

const App: FC = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
