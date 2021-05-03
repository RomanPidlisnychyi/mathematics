import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getTestsSuccess,
  createTestSuccess,
  getTestingSuccess,
  clearTesting,
  clearTestingResults,
  clearTestingResultById,
  getTestingResultsSuccess,
  getTestingResultByIdSuccess,
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
  [getTestingResultsSuccess]: (_, { payload }) => payload,
  [clearTestingResults]: () => [],
});

export const testingResult = createReducer(null, {
  [getTestingResultByIdSuccess]: (_, { payload }) => payload,
  [clearTestingResultById]: () => null,
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
