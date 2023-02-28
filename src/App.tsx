import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from './components/Main';
// import Error from './components/pages/Error';
// import SignUp from './components/pages/SignUp';
// import SignIn from './components/pages/SignIn';
// import ProtectedRoute from './components/ProtectedRoute';
// import useAuth from './hooks/auth/useAuth';

const App: FC = () => {
  // const loading = useSelector((state) => state.auth.loading);
  // const loggedIn = useSelector((state) => state.auth.loggedIn);
  // const getUser = useAuth();

  // useEffect(() => {
  //   getUser();
  // }, [getUser]);

  // if (loading) {
  //   return null;
  // }

  return (
    <>
      <Main />
    </>
  );
};

export default App;
