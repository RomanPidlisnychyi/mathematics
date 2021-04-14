import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { MyInput } from '../../Inputs';
import { onLogin } from '../../../store/operations/authOperations';
import { inputs } from '../../../inputs';
import styles from '../SingUpForm/SingUpForm.module.css';

export default function CreateArticleSectionForm() {
  const myInput = inputs.find(input => input.name === 'name');
  return (
    <Form className={styles.form}>
      <h6 className={styles.title}>Create</h6>
      <MyInput {...myInput} />
    </Form>
  );
}
