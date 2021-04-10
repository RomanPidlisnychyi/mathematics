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
  refreshRequest,
  refreshSuccess,
  refreshError,
  recoveryRequest,
  recoverySuccess,
  recoveryError,
  newPasswordRequest,
  newPasswordSuccess,
  newPasswordError,
  cleanMessage,
} from '../actions/authActions';
import { getAllVacancies, getStatuses } from '../actions/vacancyActions';
import {
  register,
  login,
  logout,
  current,
  refresh,
  recovery,
  newPassword,
  vacancies,
} from '../../utils/apiUtils';

export const onRegister = credentials => async dispatch => {
  dispatch(registerRequest());

  const payload = await register(credentials);

  if (payload.name) {
    dispatch(registerSuccess(payload));
    return payload;
  }

  dispatch(registerError(payload));
  dispatch(onCleanMessage());
};

export const onLogin = credentials => async dispatch => {
  dispatch(loginRequest());
  const payload = await login(credentials);
  if (payload.user) {
    dispatch(loginSuccess(payload));
    const { vacancies: userVacancies, statuses } = await vacancies();
    dispatch(getAllVacancies(userVacancies));
    dispatch(getStatuses(statuses));
    return;
  }

  dispatch(loginError(payload));
  dispatch(onCleanMessage());
};

export const onLogout = () => dispatch => {
  logout();
  dispatch(logoutSuccess());
};

export const onCurrent = () => async dispatch => {
  dispatch(currentRequest());
  const payload = await current();
  if (payload.user) {
    dispatch(currentSuccess(payload));
    const { vacancies: userVacancies, statuses } = await vacancies();
    dispatch(getAllVacancies(userVacancies));
    dispatch(getStatuses(statuses));
    return;
  }

  dispatch(currentError(payload));
  dispatch(onCleanMessage());
};

export const onRefresh = () => async dispatch => {
  dispatch(refreshRequest());
  const payload = await refresh();

  if (payload && payload.status && payload.status < 400) {
    dispatch(refreshSuccess(payload.data.access));
    return;
  }

  dispatch(refreshError(payload));
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
