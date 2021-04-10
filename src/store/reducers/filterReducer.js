import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  setFilter,
  setFilterFavorite,
  setFilterStatus,
} from '../actions/filterActions';
import { currentError, refreshError } from '../actions/authActions';

const filter = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
  [currentError]: () => '',
  [refreshError]: () => '',
});

const favorite = createReducer(false, {
  [setFilterFavorite]: (_, { payload }) => payload,
  [currentError]: () => false,
  [refreshError]: () => false,
});

const status = createReducer(null, {
  [setFilterStatus]: (_, { payload }) => payload,
  [currentError]: () => null,
  [refreshError]: () => null,
});

export default combineReducers({
  filter,
  favorite,
  status,
});
