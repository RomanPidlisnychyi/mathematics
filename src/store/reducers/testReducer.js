import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getTestsSuccess,
  createTestSuccess,
  getTestingSuccess,
  clearTesting,
  createTestingResultSuccess,
  clearTestingResults,
  getTestingResultsSuccess,
  setQuestionSuccess,
  setAnswerSuccess,
  cleanTestState,
} from '../actions/testActions';

export const tests = createReducer([], {
  [getTestsSuccess]: (state, { payload }) => [...state, ...payload],
  [createTestSuccess]: (state, { payload }) => [...state, payload],
});

export const testing = createReducer([], {
  [getTestingSuccess]: (_, { payload }) => payload,
  [clearTesting]: () => [],
});

export const testingResults = createReducer([], {
  [createTestingResultSuccess]: (state, { payload }) => [...state, payload],
  [getTestingResultsSuccess]: (_, { payload }) => payload,
  [clearTestingResults]: () => [],
});

const questions = createReducer([], {
  [setQuestionSuccess]: (state, { payload }) => [...state, payload],
  [cleanTestState]: () => [],
});

const answers = createReducer([], {
  [setAnswerSuccess]: (state, { payload }) => [...state, payload],
  [cleanTestState]: () => [],
});

export const test = combineReducers({
  questions,
  answers,
});
