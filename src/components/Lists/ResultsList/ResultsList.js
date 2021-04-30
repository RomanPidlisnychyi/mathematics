import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTestingResults } from '../../../store/selectors/testSelectors';

export default function ResultsList({ pathname }) {
  const testingResults = useSelector(getTestingResults);

  return (
    <ul>
      {testingResults &&
        testingResults.length > 0 &&
        testingResults.map(({ _id }) => (
          <li key={_id}>
            <Link to={`${pathname}/${_id}`}>{_id}</Link>
          </li>
        ))}
    </ul>
  );
}
