import { ResultsList } from '../Lists';
import { Title } from '../Title';
import styles from './Results.module.css';

export default function Results({ match, location }) {
  return (
    <div className={styles.container}>
      <Title match={match} />
      <ResultsList {...location} />
    </div>
  );
}
