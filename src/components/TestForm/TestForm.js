import React, { useState } from 'react';
import SimpleTest from '../SimpleTest/SimpleTest';

const typeOfTest = {
  SIMPLE: 'simple',
  CONFORMITY: 'conformity',
};

export default function TestForm() {
  const { SIMPLE, CONFORMITY } = typeOfTest;
  const [type, setType] = useState(SIMPLE);
  return (
    <div>
      <div role="group">
        Test type:
        <br />
        <label>
          <input
            type="radio"
            value={SIMPLE}
            onChange={e => setType(e.target.value)}
            checked={type === SIMPLE}
          />
          <span>Simple</span>
        </label>
        <label>
          <input
            type="radio"
            value={CONFORMITY}
            onChange={e => setType(e.target.value)}
            checked={type === CONFORMITY}
          />
          <span>Conformity</span>
        </label>
      </div>
      {type === SIMPLE && <SimpleTest />}
    </div>
  );
}
