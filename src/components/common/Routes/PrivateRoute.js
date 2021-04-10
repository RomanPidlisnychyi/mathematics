import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getStatus } from '../../../store/selectors/authSelectors';

export default function PrivateRoute({ component: Component, ...rest }) {
  const status = useSelector(getStatus);
  const isAdmin = status === 'admin';
  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
