import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';
import SingIn from '../components/SingIn/SingIn';

export default function LoginView() {
  const recoveryStatus = useSelector(authSelectors.getRecoveryStatus);
  return recoveryStatus ? <Redirect to="/recovery" /> : <SingIn />;
}
