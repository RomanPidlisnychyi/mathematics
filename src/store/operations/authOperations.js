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
  token,
  register,
  login,
  logout,
  current,
  recovery,
  newPassword,
} from '../../utils/apiUtils';
import { asyncWrapper } from '../../utils/asyncWrapper';

export const onRegister = credentials => async dispatch => {
  dispatch(registerRequest());

  const payload = await asyncWrapper(register(credentials));
  if (payload.status < 400) {
    delete credentials.name;
    dispatch(registerSuccess(credentials));
    dispatch(setMessage('Registration was successfully'));
    dispatch(onCleanMessage());
    return credentials;
  }

  dispatch(registerError(payload));
  dispatch(onCleanMessage());
};

export const onLogin = credentials => async dispatch => {
  dispatch(loginRequest());
  const payload = await asyncWrapper(login(credentials));
  console.log(`payload`, payload);
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
  const payload = await asyncWrapper(current(tokens));
  dispatch(onGetArticles());
  if (payload.status < 400) {
    dispatch(currentSuccess(payload.data.user));
    return;
  }

  token.unset();
  dispatch(currentError(payload));
  dispatch(onCleanMessage());
};

export const onRecovery = credentials => async dispatch => {
  dispatch(recoveryRequest());
  const payload = await asyncWrapper(recovery(credentials));

  if (payload.status < 400) {
    dispatch(recoverySuccess(payload.data));
    return;
  }

  dispatch(recoveryError(payload));
  dispatch(onCleanMessage());
};

export const onNewPassword = credentials => async dispatch => {
  dispatch(newPasswordRequest());
  const payload = await newPassword(credentials);

  if (payload.status < 400) {
    delete credentials.recoveryPassword;
    dispatch(newPasswordSuccess(credentials));
    return credentials;
  }

  dispatch(newPasswordError(payload));
  dispatch(onCleanMessage());
};

export const onCleanMessage = () => dispatch => {
  setTimeout(() => {
    dispatch(cleanMessage());
  }, 2000);
};
