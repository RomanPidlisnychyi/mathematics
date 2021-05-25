import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ResultsList } from '../Lists';
import { getName } from '../../store/selectors/authSelectors';
import viewWrappHoc from '../../utils/viewWrappHoc';
import styles from './Results.module.css';

function Results({ match, location }) {
  const isAuthenticated = useSelector(getName);
  return (
    <div className={styles.container}>
      {isAuthenticated ? (
        <>
          <ResultsList {...location} {...match} />
          <Link to={`${location.pathname}/test`}>Пройти тест</Link>
        </>
      ) : (
        <Link to="/login">Спершу увійдіть в обліковий запис</Link>
      )}
    </div>
  );
}

export default viewWrappHoc(Results);
