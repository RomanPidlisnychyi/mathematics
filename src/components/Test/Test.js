import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onGetTestById } from '../../store/operations/testOperations';

export default function Test({ match }) {
  const dispatch = useDispatch();
  const { testId } = match.params;

  const [test, setTest] = useState(null);

  useEffect(() => {
    dispatch(onGetTestById(testId));
  }, [dispatch]);
  return <div>{testId}</div>;
}
