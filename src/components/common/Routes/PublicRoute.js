import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { token } from '../../../utils/apiUtils';

export default function PablicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const isAuthenticated = token.getLocalTokens();
  return (
    <Route
      {...rest}
      render={props =>
        restricted && isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
