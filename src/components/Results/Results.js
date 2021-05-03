import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ResultsList } from '../Lists';
import { Title } from '../Title';
import { getName } from '../../store/selectors/authSelectors';
import styles from './Results.module.css';

export default function Results({ match, location }) {
  const isAuthenticated = useSelector(getName);
  return (
    <div className={styles.container}>
      <Title match={match} />
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
