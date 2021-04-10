import { createReducer } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  currentRequest,
  currentSuccess,
  currentError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  recoveryRequest,
  recoverySuccess,
  recoveryError,
  newPasswordRequest,
  newPasswordSuccess,
  newPasswordError,
} from '../actions/authActions';

const loading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [currentRequest]: () => true,
  [currentSuccess]: () => false,
  [currentError]: () => false,
  [refreshRequest]: () => true,
  [refreshSuccess]: () => false,
  [refreshError]: () => false,
  [recoveryRequest]: () => true,
  [recoverySuccess]: () => false,
  [recoveryError]: () => false,
  [newPasswordRequest]: () => true,
  [newPasswordSuccess]: () => false,
  [newPasswordError]: () => false,
});

export default loading;
