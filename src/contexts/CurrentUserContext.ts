import React from 'react';

const CurrentUserContext = React.createContext({
  id: '',
  firstName: '',
});

export default CurrentUserContext;
