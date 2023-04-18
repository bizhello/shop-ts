import React, { FC, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './pages/Error'
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CurrentUserContext from "./contexts/CurrentUserContext";
import { IUserInfo } from "./common/interfaces/IUser";

const App: FC = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    id: '',
    firstName: '',
  });

  const changeUserInfo = (data: IUserInfo): void => {
    setUserInfo(data)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <SignUp />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <SignIn changeUserInfo={changeUserInfo} />,
      errorElement: <Error />,
    },
  ]);

  return (
    <CurrentUserContext.Provider value={userInfo}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
