import { createReducer } from '@reduxjs/toolkit';
import {
  addTestRequest,
  addTestSuccess,
  addTestError,
} from '../actions/tetsActions';

export const tests = createReducer(null, {
  [addTestRequest]: (_, { payload }) => payload,
});
