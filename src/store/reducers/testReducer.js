import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getTestsSuccess,
  createTestSuccess,
  setQuestionSuccess,
  setAnswerSuccess,
  cleanTestState,
  deleteTestSuccess,
} from '../actions/testActions';

export const tests = createReducer([], {
  [getTestsSuccess]: (state, { payload }) => [...state, ...payload],
  [createTestSuccess]: (state, { payload }) => [...state, payload],
  [deleteTestSuccess]: (state, { payload }) =>
    state.filter(test => test._id !== payload),
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
