import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  // If user is logged in, allow access to the dashboard, otherwise redirect to login
  return isLoggedIn ? <NavLink to='/dashboard' /> : <NavLink to='/login' />;
};

export default PrivateRoute;
