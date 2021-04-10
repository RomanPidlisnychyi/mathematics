import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('REGISTER_REQUEST');
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerError = createAction('REGISTER_ERROR');

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginError = createAction('LOGIN_ERROR');

export const logoutSuccess = createAction('LOGOUT_SUCCESS');

export const currentRequest = createAction('CURRENT_REQUEST');
export const currentSuccess = createAction('CURRENT_SUCCESS');
export const currentError = createAction('CURRENT_ERROR');

export const refreshRequest = createAction('REFRESH_REQUEST');
export const refreshSuccess = createAction('REFRESH_SUCCESS');
export const refreshError = createAction('REFRESH_ERROR');

export const recoveryRequest = createAction('RECOVERY_REQUEST');
export const recoverySuccess = createAction('RECOVERY_SUCCESS');
export const recoveryError = createAction('RECOVERY_ERROR');

export const newPasswordRequest = createAction('NEW_PASSWORD_REQUEST');
export const newPasswordSuccess = createAction('NEW_PASSWORD_SUCCESS');
export const newPasswordError = createAction('NEW_PASSWORD_ERROR');

export const cleanMessage = createAction('CLEAN_MESSAGE');
