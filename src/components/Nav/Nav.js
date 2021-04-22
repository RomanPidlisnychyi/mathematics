import { Link, NavLink } from 'react-router-dom';
import { ArticlesList } from '../Lists';
import { routes } from '../../routes';
import styles from './Nav.module.css';

export default function Nav() {
  const articleRoute = routes.find(route => route.path === '/articles');
  const myRoute = routes.filter(
    route => route.path === '/' || route.path === '/articles'
  );
  return (
    <div>
      <div className={styles.container}>
        {myRoute.map(route => (
          // <NavLink
          //   activeClassName={styles.active}
          //   className={styles.link}
          //   to={route.path}
          // >
          //   {route.label}
          // </NavLink>
          <NavLink
            to={route.path}
            isActive={(match, location) => {
              if (!match) {
                return false;
              }

              // only consider an event active if its event id is an odd number
              const eventID = parseInt(match.params.eventID);
              return !isNaN(eventID) && eventID % 2 === 1;
            }}
          >
            {route.label}
          </NavLink>
        ))}
        {/* <NavLink
          activeClassName={styles.active}
          className={styles.link}
          to={articleRoute.path}
        >
          Розділи
        </NavLink> */}
      </div>
      {/* <ArticlesList /> */}
    </div>
  );
}
