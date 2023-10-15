import React from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { Authenticated, NonAuthenticated } from './MainNavigation';

const RootNavigation = () => {
  const user = useSelector(state => state.user);

  return user.isLoggedIn ? <Authenticated/> : <NonAuthenticated />
}

export default RootNavigation;