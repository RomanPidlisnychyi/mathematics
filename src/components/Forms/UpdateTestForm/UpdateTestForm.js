import { Form } from 'react-bootstrap';
import { MyInput } from '../../Inputs';
import { inputs } from '../../../inputs';
import styles from '../SingUpForm/SingUpForm.module.css';

export default function UpdateTestForm() {
  const myInput = inputs.find(input => input.name === 'name');
  return (
    <Form className={styles.form}>
      <MyInput {...myInput} />
    </Form>
  );
}
