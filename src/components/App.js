import React from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { authSelectors } from '../redux/auth';
import ErrorPinotify from './ErrorPinotify/ErrorPinotify';
import { PublicRoute, PrivedRoute } from './common/Routes';
import Layout from './Layout/Layout';
import Nav from './Nav/Nav';
import routes from '../routes';
import fade from './ErrorPinotify/ErrorPinotify.module.css';
// import SimpleTest from './SimpleTest/SimpleTest';

export default function App() {
  const errorMessage = useSelector(authSelectors.getAuthErr);

  return (
    <Layout>
      <Nav />
      <CSSTransition
        in={errorMessage}
        classNames={fade}
        timeout={250}
        unmountOnExit
      >
        <ErrorPinotify message={errorMessage} />
      </CSSTransition>
      <Switch>
        {routes.map(route =>
          route.pablic ? (
            <PublicRoute key={route.label} {...route} />
          ) : (
            <PrivedRoute key={route.label} {...route} />
          )
        )}
      </Switch>
    </Layout>
  );
}
