import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../Title';
import { TestingResultList } from '../Lists';
import { LinkToLogin } from '../LinkToLogin';
import { onGetTestingResultById } from '../../store/operations/testingOperations';
import { getUpdatedTestingResultById } from '../../store/selectors/testingSelectors';
import { getName } from '../../store/selectors/authSelectors';
import { clearTestingResultById } from '../../store/actions/testingActions';
import styles from './Result.module.css';

export default function Result({ match }) {
  const resultId = match.params.resultId;
  const isAuthenticated = useSelector(getName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(onGetTestingResultById(resultId));
    }

    return () => {
      dispatch(clearTestingResultById());
    };
  }, [dispatch, isAuthenticated]);

  const result = useSelector(getUpdatedTestingResultById);
  return (
    <div>
      <Title match={match} />
      {isAuthenticated ? (
        <div className={styles.container}>
          {result && (
            <div>
              {result.time}/{result.date}
              <TestingResultList testing={result.testing} />
            </div>
          )}
        </div>
      ) : (
        <LinkToLogin />
      )}
    </div>
  );
}
