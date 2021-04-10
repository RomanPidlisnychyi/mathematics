import { createAction } from '@reduxjs/toolkit';

export const addTestRequest = createAction('ADD_TEST_REQUEST');
export const addTestSuccess = createAction('ADD_TEST_SUCCESS');
export const addTestError = createAction('ADD_TEST_ERROR');
