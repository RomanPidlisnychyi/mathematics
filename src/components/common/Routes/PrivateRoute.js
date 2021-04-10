import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { token } from '../../../utils/apiUtils';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = token.getLocalTokens();
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
