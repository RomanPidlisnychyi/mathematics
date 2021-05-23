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
import { token, fetching } from '../../utils/apiUtils';

export const onRegister = credentials => async dispatch => {
  dispatch(registerRequest());
  const option = {
    method: 'post',
    path: '/auth/register',
    credentials,
  };

  const payload = await fetching(option);
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
  const option = {
    method: 'post',
    path: '/auth/login',
    credentials,
  };
  const payload = await fetching(option);

  if (payload.status < 400) {
    const { tokens } = payload.data;
    token.setTokens(tokens);

    dispatch(loginSuccess(payload.data.user));
    return;
  }

  dispatch(loginError(payload));
  dispatch(onCleanMessage());
};

export const onLogout = () => dispatch => {
  token.unset();
  dispatch(logoutSuccess());
};

export const onCurrent = tokens => async dispatch => {
  dispatch(currentRequest());

  token.setTokens(tokens);

  const option = {
    method: 'get',
    path: '/auth/current',
  };
  const payload = await fetching(option);

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

  const option = {
    method: 'post',
    path: '/auth/setRecoveryPassword',
    credentials,
  };
  const payload = await fetching(option);

  if (payload.status < 400) {
    dispatch(recoverySuccess(payload.data));
    return;
  }

  dispatch(recoveryError(payload));
  dispatch(onCleanMessage());
};

export const onNewPassword = credentials => async dispatch => {
  dispatch(newPasswordRequest());

  const option = {
    method: 'patch',
    path: '/auth/setNewPassword',
    credentials,
  };
  const payload = await fetching(option);

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
