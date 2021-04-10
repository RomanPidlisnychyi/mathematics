import { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ErrorPinotify from './ErrorPinotify/ErrorPinotify';
import { PublicRoute, PrivateRoute } from './common/Routes';
import Layout from './Layout/Layout';
import { Header } from './Header';
import { getMessage } from '../store/selectors/authSelectors';
import { routes } from '../routes';
// import { token } from '../utils/apiUtils';
import fade from './ErrorPinotify/ErrorPinotify.module.css';
// import SimpleTest from './SimpleTest/SimpleTest';

export default function App() {
  const message = useSelector(getMessage);
  return (
    <Layout>
      <Header />
      <CSSTransition in={message} classNames={fade} timeout={250} unmountOnExit>
        <ErrorPinotify message={message} />
      </CSSTransition>
      <Suspense fallback={false}>
        <Switch>
          {routes.map(route =>
            route.pablic ? (
              <PublicRoute key={route.label} {...route} />
            ) : (
              <PrivateRoute key={route.label} {...route} />
            )
          )}
        </Switch>
      </Suspense>
    </Layout>
  );
}
