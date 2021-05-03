import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { onGetThemesByQuery } from '../../../store/operations/themeOperations';
import styles from './MainInput.module.css';

export default function MainInput({ handleModal }) {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');
  const [themes, setThemes] = useState([]);

  const handleInput = e => setQuery(e.target.value);

  if (query.length > 1) {
    dispatch(onGetThemesByQuery(query)).then(themes => setThemes(themes));
  }

  if (query.length < 2 && themes.length) {
    setThemes([]);
  }

  const handleBtn = () => {
    // dispatch(onRefresh()).then(handleModal());
  };
  return (
    <InputGroup className={styles.input}>
      <Form.Control
        value={query}
        name="main"
        onChange={handleInput}
        placeholder="Назва теми"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={handleBtn}
          disabled={!query}
        >
          Add
        </Button>
      </InputGroup.Append>
      <ul>
        {themes.map(theme => (
          <li key={theme._id}>{theme.name}</li>
        ))}
      </ul>
    </InputGroup>
  );
}
