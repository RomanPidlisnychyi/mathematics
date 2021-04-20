import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTestsByThemeId } from '../../../store/selectors/testSelectors';
import { onGetTests } from '../../../store/operations/testOperations';

export default function TestsList({ pathname, themeId }) {
  const dispatch = useDispatch();
  const tests = useSelector(state => getTestsByThemeId(state, themeId));

  useEffect(() => {
    if (tests && !tests.length) {
      dispatch(onGetTests(themeId));
    }
  }, [dispatch, themeId]);

  return (
    <ul>
      {tests &&
        tests.length > 0 &&
        tests.map(({ _id, questions }) => (
          <li key={_id}>
            <Link to={`${pathname}/${_id}`}>{questions[0].question}</Link>
          </li>
        ))}
    </ul>
  );
}
