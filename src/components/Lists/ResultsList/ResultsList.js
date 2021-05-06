import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUpdatedTestingResults } from '../../../store/selectors/testingSelectors';
import { onGetTestingResults } from '../../../store/operations/testingOperations';
import { clearTestingResults } from '../../../store/actions/testingActions';

export default function ResultsList({ pathname, params }) {
  const dispatch = useDispatch();
  const themeId = params.themeId;
  useEffect(() => {
    dispatch(onGetTestingResults(themeId));

    return () => {
      dispatch(clearTestingResults());
    };
  }, [dispatch]);
  const testingResults = useSelector(getUpdatedTestingResults);
  return (
    <ul>
      {testingResults &&
        testingResults.length > 0 &&
        testingResults.map(item => (
          <li key={item._id}>
            <Link to={`${pathname}/${item._id}`}>
              {item.time}/{item.date} TotalScore: {item.totalScore} %
            </Link>
          </li>
        ))}
    </ul>
  );
}
