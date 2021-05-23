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
  recoverySuccess,
  recoveryError,
  newPasswordError,
  setMessage,
  cleanMessage,
} from '../actions/authActions';

import { deleteArticleError } from '../actions/articleActions';
import {
  createSectionError,
  deleteSectionError,
} from '../actions/sectionActions';
import { createThemeError } from '../actions/themeActions';

const initialUserState = {
  name: null,
  email: null,
  status: null,
};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
  [currentSuccess]: (_, { payload }) => payload,
  [currentError]: () => initialUserState,
  [logoutSuccess]: () => initialUserState,
  [refreshError]: () => initialUserState,
  [recoverySuccess]: (_, { payload }) => payload,
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
  [deleteArticleError]: (_, { payload }) => payload,
  [createSectionError]: (_, { payload }) => payload,
  [createThemeError]: (_, { payload }) => payload,
  [deleteSectionError]: (_, { payload }) => payload,
  [cleanMessage]: () => null,
});

export default combineReducers({
  user,
  message,
});
