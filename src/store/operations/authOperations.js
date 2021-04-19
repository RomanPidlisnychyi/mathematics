import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutSuccess,
  currentRequest,
  currentSuccess,
  currentError,
  recoveryRequest,
  recoverySuccess,
  recoveryError,
  newPasswordRequest,
  newPasswordSuccess,
  newPasswordError,
  setMessage,
  cleanMessage,
} from '../actions/authActions';
import { onGetArticles } from './articleOperations';
import {
  register,
  login,
  logout,
  current,
  recovery,
  newPassword,
} from '../../utils/apiUtils';

export const onRegister = credentials => async dispatch => {
  dispatch(registerRequest());

  const payload = await register(credentials);

  if (payload.name) {
    dispatch(registerSuccess(payload));
    dispatch(setMessage('Registration was successfully'));
    dispatch(onCleanMessage());
    return payload;
  }

  dispatch(registerError(payload));
  dispatch(onCleanMessage());
};

export const onLogin = credentials => async dispatch => {
  dispatch(loginRequest());
  const payload = await login(credentials);
  if (payload.status < 400) {
    dispatch(loginSuccess(payload.data.user));
    return;
  }

  dispatch(loginError(payload));
  dispatch(onCleanMessage());
};

export const onLogout = () => dispatch => {
  logout();
  dispatch(logoutSuccess());
};

export const onCurrent = tokens => async dispatch => {
  dispatch(currentRequest());
  const payload = await current(tokens);
  dispatch(onGetArticles());
  if (payload.status < 400) {
    dispatch(currentSuccess(payload.data.user));
    return;
  }

  dispatch(currentError(payload));
  dispatch(onCleanMessage());
};

export const onRecovery = credentials => async dispatch => {
  dispatch(recoveryRequest());
  const payload = await recovery(credentials);

  if (payload && payload.status && payload.status < 400) {
    dispatch(recoverySuccess(payload.data));
    return;
  }

  dispatch(recoveryError(payload));
  dispatch(onCleanMessage());
};

export const onNewPassword = credentials => async dispatch => {
  dispatch(newPasswordRequest());
  const payload = await newPassword(credentials);

  if (payload.name) {
    dispatch(newPasswordSuccess(payload));
    return payload;
  }

  dispatch(newPasswordError(payload));
  dispatch(onCleanMessage());
};

export const onCleanMessage = () => dispatch => {
  setTimeout(() => {
    dispatch(cleanMessage());
  }, 2000);
};
