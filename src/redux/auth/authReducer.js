import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './authActions';

const localUser = JSON.parse(localStorage.getItem('user'));

const stateExample = {
  email: null,
  name: null,
};

const initState = localUser ? localUser : stateExample;

const user = createReducer(initState, {
  [authActions.login]: (_, action) => action.payload,
  [authActions.logout]: () => stateExample,
});

const error = createReducer(null, {
  [authActions.loginError]: (_, action) => action.payload,
});

const status = createReducer(null, {
  [authActions.recoveryStatus]: (_, action) => action.payload,
});

export default combineReducers({
  user,
  error,
  status,
});
