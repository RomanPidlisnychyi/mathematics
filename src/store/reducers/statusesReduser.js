import { createReducer } from '@reduxjs/toolkit';
import { getStatuses } from '../actions/vacancyActions';
import { currentError, refreshError } from '../actions/authActions';

export const statuses = createReducer(null, {
  [getStatuses]: (_, { payload }) => payload,
  [currentError]: () => null,
  [refreshError]: () => null,
});
