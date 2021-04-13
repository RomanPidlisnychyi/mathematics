import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Nav.module.css';

export default function Nav() {
  const [showList, setShowList] = useState(false);
  const articleRoute = routes.find(route => route.path === '/articles');

  const handleShow = () => setShowList(!showList);
  return (
    <div>
      <Link className={styles.link} to={articleRoute.path}>
        {articleRoute.label}
      </Link>
      <button type="button" />
    </div>
  );
}
