import { useState, useEffect } from 'react';

export default function Test({ match }) {
  const { testId } = match.params;

  const [test, setTest] = useState(null);

  useEffect(() => {
    //getTest
  });
  return <div>{testId}</div>;
}
