import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Nav.module.css';

export default function Nav() {
  const homeRoute = routes.find(route => route.path === '/');
  const articleRoute = routes.find(route => route.path === '/articles');
  return (
    <div>
      <div className={styles.container}>
        <Link to={homeRoute.path}>Головна</Link>
        <Link to={articleRoute.path}>Розділи</Link>
      </div>
    </div>
  );
}
