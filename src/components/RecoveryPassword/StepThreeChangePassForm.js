import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { authOperation } from '../../redux/auth';
import styles from '../SingIn/SingIn.module.css';

export default function StepThreeChangePassForm() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handlerSubmit = e => {
    e.preventDefault();

    dispatch(authOperation.recoveryPassword({ password }));
  };

  const isPassValid = password.length >= 6;
  const isConfirmPassValid = isPassValid && confirmPass === password;

  return (
    <Form className={styles.form} onSubmit={handlerSubmit}>
      <Form.Group className={styles.formGroup}>
        <Form.Label className={styles.passwordLabel} />
        <Form.Control
          type="password"
          className={!isPassValid && styles.input}
          placeholder="password"
          isValid={isPassValid}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {!isPassValid && password.length > 0 && (
          <Form.Text className={styles.info}>
            Password must be at least 6 characters long!
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className={styles.formGroup}>
        <Form.Label className={styles.passwordLabel} />
        <Form.Control
          type="password"
          className={!isConfirmPassValid && styles.input}
          placeholder="confirm password"
          isValid={isConfirmPassValid}
          value={confirmPass}
          onChange={e => setConfirmPass(e.target.value)}
        />
        {!isConfirmPassValid && confirmPass.length > 0 && (
          <Form.Text className={styles.info}>password dosn't match!</Form.Text>
        )}
      </Form.Group>
      <Button
        className={styles.button}
        variant="outline-primary"
        type="submit"
        disabled={!isConfirmPassValid}
      >
        Change
      </Button>
    </Form>
  );
}
