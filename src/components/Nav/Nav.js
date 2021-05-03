import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Nav.module.css';

export default function Nav() {
  const articleRoute = routes.find(route => route.path === '/articles');
  return (
    <div>
      <div className={styles.container}>
        <Link to={articleRoute.path}>Розділи</Link>
      </div>
    </div>
  );
}
