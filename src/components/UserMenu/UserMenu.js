import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { onLogout } from '../../store/operations/authOperations';
import styles from './UserMenu.module.css';

export default function UserMenu({ name, isToken, status }) {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => setIsModal(!isModal);

  const isAdmin = status === 'admin';

  const logout = () => dispatch(onLogout());
  return (
    <div className={styles.container}>
      {isToken ? (
        <>
          <button type="button" className={styles.name} onClick={handleModal}>
            {name}
            {isModal && (
              <Link
                className={styles.link}
                to={isAdmin ? '/admin' : '/details'}
              >
                {isAdmin ? 'Admin' : 'Details'}
              </Link>
            )}
          </button>
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
