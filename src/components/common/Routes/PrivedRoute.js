import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';

export default function PrivedRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(authSelectors.getUserName);
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
