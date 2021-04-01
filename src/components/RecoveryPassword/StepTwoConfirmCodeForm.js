import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { authOperation } from '../../redux/auth';
import styles from '../SingIn/SingIn.module.css';

export default function StepTwoConfirmCodeForm() {
  const dispatch = useDispatch();
  const [code, setCode] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();

    dispatch(authOperation.recoveryPassword({ code }));
  };

  const isCodeValid = code.length === 6;
  return (
    <Form className={styles.form} onSubmit={handlerSubmit}>
      <Form.Group className={styles.formGroup}>
        <Form.Label className={styles.passwordLabel} />
        <Form.Control
          type="text"
          className={!isCodeValid && styles.input}
          isValid={isCodeValid}
          placeholder="code"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <Form.Text className={styles.text}>
          We send confirm code on your email!
        </Form.Text>
        {!isCodeValid && code.length > 0 && (
          <Form.Text className={styles.info}>
            Password must be 6 characters long!
          </Form.Text>
        )}
      </Form.Group>
      <Button
        className={styles.button}
        variant="outline-primary"
        type="submit"
        disabled={!isCodeValid}
      >
        Next
      </Button>
    </Form>
  );
}
