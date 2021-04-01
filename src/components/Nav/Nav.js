import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authSelectors, authOperation, authActions } from '../../redux/auth';
import routes from '../../routes';
import styles from './Nav.module.css';

export default function Nav() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getUserName);

  return (
    <nav>
      <ul className={styles.list}>
        {routes.map(route => {
          if (route.label === 'Login') {
            return isAuthenticated ? (
              <li className={styles.item} key={route.path}>
                <span>{isAuthenticated}</span>
                <Button
                  variant="outline-primary"
                  type="button"
                  onClick={() => dispatch(authOperation.singout())}
                >
                  Logout
                </Button>
              </li>
            ) : (
              <li className={styles.item} key={route.path}>
                <Link
                  className={styles.link}
                  to={route.path}
                  onClick={() => dispatch(authActions.recoveryStatus(null))}
                >
                  {route.label}
                </Link>
              </li>
            );
          }

          if (
            (route.label === 'Admin' && !isAuthenticated) ||
            route.label === 'Recovery'
          ) {
            return false;
          }
          return (
            <li className={styles.item} key={route.path}>
              <Link className={styles.link} to={route.path}>
                {route.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
