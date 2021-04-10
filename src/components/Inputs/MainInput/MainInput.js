import { useSelector, useDispatch } from 'react-redux';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { getFilter } from '../../../store/selectors/filterSelectors';
import { setFilter } from '../../../store/actions/filterActions';
import { onRefresh } from '../../../store/operations/authOperations';
import styles from './MainInput.module.css';

export default function MainInput({ handleModal }) {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleInput = e => dispatch(setFilter(e.target.value));

  const handleBtn = () => {
    dispatch(onRefresh()).then(handleModal());
  };
  return (
    <InputGroup className={styles.input}>
      <Form.Control
        value={filter}
        name="main"
        onChange={handleInput}
        placeholder="Company name"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={handleBtn}
          disabled={!filter}
        >
          Add
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
