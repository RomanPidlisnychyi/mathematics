import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerSuccess,
  loginSuccess,
  currentSuccess,
  logoutSuccess,
  registerError,
  loginError,
  currentError,
  refreshError,
  refreshSuccess,
  recoverySuccess,
  recoveryError,
  newPasswordError,
  cleanMessage,
} from '../actions/authActions';

const isLocalTokens = localStorage.getItem('vacancyTokens');

const initialUserState = {
  name: null,
  email: null,
};

const initialTokensState = {
  access: null,
  refresh: null,
};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload.user,
  [currentSuccess]: (_, { payload }) => payload.user,
  [currentError]: () => initialUserState,
  [logoutSuccess]: () => initialUserState,
  [refreshError]: () => initialUserState,
  [recoverySuccess]: (_, { payload }) => payload,
});

const tokens = createReducer(
  isLocalTokens ? JSON.parse(isLocalTokens) : initialTokensState,
  {
    [loginSuccess]: (_, { payload }) => payload.tokens,
    [currentSuccess]: (_, { payload }) => payload.tokens,
    [refreshSuccess]: (state, { payload }) =>
      payload ? { ...state, access: payload } : state,
    [currentError]: () => initialTokensState,
    [logoutSuccess]: () => initialTokensState,
    [refreshError]: () => initialTokensState,
  }
);

const message = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [registerSuccess]: () => null,
  [loginError]: (_, { payload }) => payload,
  [loginSuccess]: () => null,
  [currentError]: (_, { payload }) => payload,
  [recoveryError]: (_, { payload }) => payload,
  [newPasswordError]: (_, { payload }) => payload,
  [cleanMessage]: () => null,
});

export default combineReducers({
  user,
  tokens,
  message,
});
