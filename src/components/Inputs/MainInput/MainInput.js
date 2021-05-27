import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { InputGroup, Form, Button } from 'react-bootstrap';
import ThemesListOfQuery from '../../Lists/ThemesListOfQuery/ThemesListOfQuery';
import {
  onGetThemesByQuery,
  onGetThemePath,
} from '../../../store/operations/themeOperations';
import styles from './MainInput.module.css';

export default function MainInput({ history }) {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');
  const [themes, setThemes] = useState([]);

  const handleInput = e => setQuery(e.target.value);

  useEffect(() => {
    if (query.length > 1) {
      dispatch(onGetThemesByQuery(query)).then(themes => setThemes(themes));
    }

    if (query.length < 2 && themes.length) {
      setThemes([]);
    }
  }, [dispatch, query]);

  const handleBtn = e => {
    const { value } = e.target;
    if (!value) {
      setQuery('');
      return;
    }

    const theme = themes[value];
    dispatch(onGetThemePath(theme)).then(path => history.push(path));
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
          Скинути
        </Button>
      </InputGroup.Append>
      <ThemesListOfQuery themes={themes} handleBtn={handleBtn} />
    </InputGroup>
  );
}
