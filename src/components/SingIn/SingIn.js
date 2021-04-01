import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { authActions, authOperation } from '../../redux/auth';
import recoveryPassStep from '../../utils/recoveryPassStep';
import styles from './SingIn.module.css';

export default function SingIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(
      authOperation.singin({
        email: email.toLowerCase(),
        password,
      })
    );
  };

  const isEmailValid = email.includes('@') && email.includes('.');
  const isPassValid = password.length >= 6;
  const btnActive = isEmailValid && isPassValid;

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
      <Button
        className={styles.button}
        variant="outline-primary"
        type="submit"
        disabled={!btnActive}
      >
        SingIn
      </Button>
      <Link
        className={styles.link}
        to="/recovery"
        onClick={() =>
          dispatch(authActions.recoveryStatus(recoveryPassStep.FIRST_STEP))
        }
      >
        Forgot password?
      </Link>
    </Form>
  );
}
