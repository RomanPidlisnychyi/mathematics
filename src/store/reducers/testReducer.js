import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getTestsSuccess,
  createTestSuccess,
  setQuestionSuccess,
  setAnswerSuccess,
  cleanTestState,
} from '../actions/testActions';

export const tests = createReducer([], {
  [getTestsSuccess]: (_, { payload }) => payload,
  [createTestSuccess]: (state, { payload }) => [...state, payload],
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
