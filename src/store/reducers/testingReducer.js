import { createReducer } from '@reduxjs/toolkit';
import {
  getTestingSuccess,
  clearTesting,
  clearTestingResults,
  clearTestingResultById,
  getTestingResultsSuccess,
  getTestingResultByIdSuccess,
} from '../actions/testingActions';

export const testing = createReducer([], {
  [getTestingSuccess]: (_, { payload }) => payload,
  [clearTesting]: () => [],
});

export const testingResults = createReducer([], {
  [getTestingResultsSuccess]: (_, { payload }) => payload,
  [clearTestingResults]: () => [],
});

export const testingResult = createReducer(null, {
  [getTestingResultByIdSuccess]: (_, { payload }) => payload,
  [clearTestingResultById]: () => null,
});
