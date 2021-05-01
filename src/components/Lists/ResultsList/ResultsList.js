import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUpdatedTestingResults } from '../../../store/selectors/testSelectors';

export default function ResultsList({ pathname }) {
  const testingResults = useSelector(getUpdatedTestingResults);
  return (
    <ul>
      {testingResults &&
        testingResults.length > 0 &&
        testingResults.map(item => (
          <li key={item._id}>
            <Link to={`${pathname}/${item._id}`}>
              {item.time}/{item.date} TotalScore: {item.totalScore}
            </Link>
          </li>
        ))}
    </ul>
  );
}
