import { createAction } from '@reduxjs/toolkit';

const login = createAction('LOGIN');
const logout = createAction('LOGOUT');
const loginError = createAction('LOGIN_ERROR');
const recoveryStatus = createAction('RECOVERY_STATUS');

export default {
  login,
  logout,
  loginError,
  recoveryStatus,
};
