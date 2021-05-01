import { useSelector } from 'react-redux';
import { Title } from '../Title';
import { TestingResultList } from '../Lists';
import { getResultById } from '../../store/selectors/testSelectors';
import styles from './Result.module.css';

export default function Result({ match }) {
  const resultId = match.params.resultId;

  const result = useSelector(state => getResultById(state, resultId));
  return (
    <div>
      <Title match={match} />
      {result ? (
        <div className={styles.container}>
          <div>
            {result.time}/{result.date}
            <TestingResultList testing={result.testing} />
          </div>
        </div>
      ) : (
        <div>Nothing to show...</div>
      )}
      ;
    </div>
  );
}
