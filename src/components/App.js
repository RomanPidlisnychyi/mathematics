import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './common/Routes';
import Layout from './Layout/Layout';
import { Header } from './Header';
import { routes } from '../routes';
import { onCurrent } from '../store/operations/authOperations';
import { getName } from '../store/selectors/authSelectors';
import { token } from '../utils/apiUtils';
// import SimpleTest from './SimpleTest/SimpleTest';

export default function App() {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const tokens = token.getLocalTokens();

  useEffect(() => {
    if (!name && tokens) {
      dispatch(onCurrent(tokens));
    }
  }, [dispatch, name, tokens]);

  return (
    <Layout>
      <Header />
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
