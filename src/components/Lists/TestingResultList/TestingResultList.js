import TestingResultListItem from './TestingResultListItem/TestingResultListItem';

export default function TestingResultList({ testing }) {
  return (
    <ul>
      {testing &&
        testing.length > 0 &&
        testing.map(item => (
          <TestingResultListItem key={item._id} item={item} />
        ))}
    </ul>
  );
}
