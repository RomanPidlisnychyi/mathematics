import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkToLogin } from '../LinkToLogin';
import { getTesting } from '../../store/selectors/testSelectors';
import { clearTesting } from '../../store/actions/testActions';
import { Title } from '../Title';
import { onCreateTestingResult } from '../../store/operations/testOperations';
import { getName } from '../../store/selectors/authSelectors';
import styles from './Testing.module.css';

export default function Testing({ match, history, location }) {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(getName);

  const [testIndex, setTestIndex] = useState(0);
  const [value, setValue] = useState(null);
  const [testComplite, setTestComplite] = useState([]);
  const themeId = match.params.themeId;
  const testing = useSelector(getTesting);

  const isNotLastTest = testIndex < testing.length - 1;

  const handleInput = e => setValue(e.target.value);

  const handleBtn = () => {
    if (isNotLastTest) {
      setTestComplite([
        ...testComplite,
        { testId: testing[testIndex]._id, answer: value },
      ]);
      setValue(null);
      setTestIndex(testIndex + 1);
      return;
    }

    const compliteTesting = [
      ...testComplite,
      { testId: testing[testIndex]._id, answer: value },
    ];

    dispatch(onCreateTestingResult({ testing: compliteTesting, themeId })).then(
      response => {
        const { pathname } = location;
        const newPath = pathname.split('/test')[0];

        history.push(`${newPath}/${response._id}`);
      }
    );
  };

  useEffect(() => {
    return () => {
      dispatch(clearTesting());
    };
  }, [dispatch]);
  return (
    <div>
      <Title match={match} />
      {isAuthenticated ? (
        <>
          {testing && testing.length > 0 && (
            <>
              <ul>
                {testing[testIndex].questions.map(question => (
                  <li key={question.question}>{question.question}</li>
                ))}
              </ul>
              <ul className={styles.list}>
                {testing[testIndex].answers.map(answer => (
                  <li key={answer}>
                    <label>
                      <input
                        type="radio"
                        value={answer}
                        onChange={handleInput}
                        checked={value === answer}
                      />
                      {answer}
                    </label>
                  </li>
                ))}
              </ul>
            </>
          )}
          <button type="button" onClick={handleBtn} disabled={!value}>
            {isNotLastTest ? 'next' : 'done'}
          </button>
        </>
      ) : (
        <LinkToLogin />
      )}
    </div>
  );
}
