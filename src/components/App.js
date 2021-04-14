import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from './common/Routes';
import { Layout, ViewLayout } from './Layout';
import { Header } from './Header';
import { Nav } from './Nav';
import { routes } from '../routes';
import { onCurrent } from '../store/operations/authOperations';
import { onGetArticles } from '../store/operations/articleOperations';
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

  useEffect(() => {
    if (!tokens) {
      dispatch(onGetArticles());
    }
  }, [dispatch, tokens]);

  return (
    <Layout>
      <Header />
      <ViewLayout>
        <Nav />
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
      </ViewLayout>
    </Layout>
  );
}
