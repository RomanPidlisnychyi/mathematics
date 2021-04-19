import { createAction } from '@reduxjs/toolkit';

export const setQuestionSuccess = createAction('SET_QUESTION_SUCCESS');
export const setAnswerSuccess = createAction('SET_ANSWER_SUCCESS');
export const cleanTestState = createAction('CLEAN_TEST_STATE');

export const getTestsRequest = createAction('GET_TESTS_REQUEST');
export const getTestsSuccess = createAction('GET_TESTS_SUCCESS');
export const getTestsError = createAction('GET_TESTS_ERROR');

export const createTestRequest = createAction('CREATE_TEST_REQUEST');
export const createTestSuccess = createAction('CREATE_TEST_SUCCESS');
export const createTestError = createAction('CREATE_TEST_ERROR');
