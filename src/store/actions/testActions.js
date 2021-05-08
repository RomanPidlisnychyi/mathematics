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

export const getTestByIdRequest = createAction('GET_TEST_BY_ID_REQUEST');
export const getTestByIdSuccess = createAction('GET_TEST_BY_ID_SUCCESS');
export const getTestByIdError = createAction('GET_TEST_BY_ID_ERROR');
