import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../../store/selectors/authSelectors';

export default function PablicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const isAuthenticated = useSelector(getToken);
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
