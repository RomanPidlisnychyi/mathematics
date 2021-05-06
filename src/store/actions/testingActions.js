import { createAction } from '@reduxjs/toolkit';

export const getTestingRequest = createAction('GET_TESTING_REQUEST');
export const getTestingSuccess = createAction('GET_TESTING_SUCCESS');
export const getTestingError = createAction('GET_TESTING_ERROR');
export const clearTesting = createAction('CLEAR_TESTING');

export const createTestingResultRequest = createAction(
  'CREATE_TESTING_RESULT_REQUEST'
);
export const createTestingResultSuccess = createAction(
  'CREATE_TESTING_RESULT_SUCCESS'
);
export const createTestingResultError = createAction(
  'CREATE_TESTING_RESULT_ERROR'
);

export const getTestingResultsRequest = createAction(
  'GET_TESTING_RESULTS_REQUEST'
);
export const getTestingResultsSuccess = createAction(
  'GET_TESTING_RESULTS_SUCCESS'
);
export const getTestingResultsError = createAction('GET_TESTING_RESULTS_ERROR');
export const clearTestingResults = createAction('CLEAR_TESTING_RESULTS');

export const getTestingResultByIdRequest = createAction(
  'GET_TESTING_RESULT_BY_ID_REQUEST'
);
export const getTestingResultByIdSuccess = createAction(
  'GET_TESTING_RESULT_BY_ID_SUCCESS'
);
export const getTestingResultByIdError = createAction(
  'GET_TESTING_RESULT_BY_ID_ERROR'
);
export const clearTestingResultById = createAction(
  'CLEAR_TESTING_RESULT_BY_ID'
);
