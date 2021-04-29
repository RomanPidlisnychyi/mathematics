import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getTestsSuccess,
  createTestSuccess,
  getTestingSuccess,
  createTestingResultSuccess,
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
});

export const testingResults = createReducer([], {
  [createTestingResultSuccess]: (state, { payload }) => [...state, payload],
  [getTestingResultsSuccess]: (state, { payload }) => [...state, ...payload],
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
