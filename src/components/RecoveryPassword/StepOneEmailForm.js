import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { authOperation } from '../../redux/auth';
import styles from '../SingIn/SingIn.module.css';

export default function RecoveryForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();

    dispatch(authOperation.recoveryPassword({ email }));
  };

  const isEmailValid = email.includes('@') && email.includes('.');
  return (
    <Form className={styles.form} onSubmit={handlerSubmit}>
      <Form.Group className={styles.formGroup}>
        <Form.Label className={styles.emailLabel} />
        <Form.Control
          type="email"
          className={!isEmailValid && styles.input}
          placeholder="email@example.com"
          isValid={isEmailValid}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {!isEmailValid && email.length > 0 && (
          <Form.Text className={styles.info}>Incorrect email!</Form.Text>
        )}
      </Form.Group>
      <Button
        className={styles.button}
        variant="outline-primary"
        type="submit"
        disabled={!isEmailValid}
      >
        Next
      </Button>
    </Form>
  );
}
