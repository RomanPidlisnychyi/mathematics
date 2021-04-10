import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { onLogout } from '../../store/operations/authOperations';
import styles from './UserMenu.module.css';

export default function UserMenu({ name, isToken, status }) {
  const dispatch = useDispatch();
  const isAdmin = status === 'admin';

  const logout = () => dispatch(onLogout());
  return (
    <div className={styles.container}>
      {isToken ? (
        <>
          {isAdmin && <Link to="/admin">Admin</Link>}
          <span className={styles.name}>{name}</span>
          <button className={styles.button} type="button" onClick={logout}>
            <span className={styles.buttonTitle}>Logout</span>
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}
