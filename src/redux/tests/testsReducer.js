import { createReducer } from '@reduxjs/toolkit';
import testsActions from './testsActions';

const tests = createReducer([], {
  [testsActions.createQuestion]: (state, action) => [...state, action.payload],
  [testsActions.removeQuestion]: (state, action) => [
    ...state.filter(test => test.id !== action.payload),
  ],
});

export default tests;
