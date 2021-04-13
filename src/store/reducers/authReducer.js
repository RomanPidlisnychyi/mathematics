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
  setMessage,
  cleanMessage,
} from '../actions/authActions';
import { getArticlesSuccess } from '../actions/articleActions';

const initialUserState = {
  name: null,
  email: null,
  status: null,
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

const tokens = createReducer(initialTokensState, {
  [loginSuccess]: (_, { payload }) => payload.tokens,
  [currentSuccess]: (_, { payload }) => payload.tokens,
  [refreshSuccess]: (state, { payload }) =>
    payload ? { ...state, access: payload } : state,
  [getArticlesSuccess]: (state, { payload }) =>
    payload.accessToken ? { ...state, access: payload.accessToken } : state,
  [currentError]: () => initialTokensState,
  [logoutSuccess]: () => initialTokensState,
  [refreshError]: () => initialTokensState,
});

const message = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [registerSuccess]: () => null,
  [loginError]: (_, { payload }) => payload,
  [loginSuccess]: () => null,
  [currentError]: (_, { payload }) => payload,
  [recoveryError]: (_, { payload }) => payload,
  [newPasswordError]: (_, { payload }) => payload,
  [setMessage]: (_, { payload }) => payload,
  [cleanMessage]: () => null,
});

export default combineReducers({
  user,
  tokens,
  message,
});
