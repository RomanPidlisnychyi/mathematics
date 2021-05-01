import {
  getTests,
  createTest,
  getTesting,
  createTestingResult,
  getTestingResult,
} from '../../utils/apiUtils';
import {
  getTestsRequest,
  getTestsSuccess,
  getTestsError,
  createTestRequest,
  createTestSuccess,
  createTestError,
  getTestingRequest,
  getTestingSuccess,
  getTestingError,
  createTestingResultRequest,
  createTestingResultSuccess,
  createTestingResultError,
  getTestingResultsRequest,
  getTestingResultsSuccess,
  getTestingResultsError,
} from '../actions/testActions';

export const onGetTests = themeId => async dispatch => {
  dispatch(getTestsRequest());

  const payload = await getTests(themeId);

  if (payload.status < 400) {
    dispatch(getTestsSuccess(payload.data.tests));
    return;
  }

  dispatch(getTestsError(payload));
};

export const onCreateTest = credentials => async dispatch => {
  dispatch(createTestRequest());

  const payload = await createTest(credentials);
  if (payload.status < 400) {
    dispatch(createTestSuccess(payload.data.test));
    return payload;
  }

  dispatch(createTestError(payload));
};

export const onGetTesting = themeId => async dispatch => {
  dispatch(getTestingRequest());

  const payload = await getTesting(themeId);

  if (payload.status < 400) {
    dispatch(getTestingSuccess(payload.data.tests));
    return;
  }

  dispatch(getTestingError(payload));
};

export const onCreateTestingResult = credentials => async dispatch => {
  dispatch(createTestingResultRequest());

  const payload = await createTestingResult(credentials);
  if (payload.status < 400) {
    dispatch(createTestingResultSuccess(payload.data.testing));
    return payload;
  }

  dispatch(createTestingResultError(payload));
};

export const onGetTestingResult = themeId => async dispatch => {
  dispatch(getTestingResultsRequest());

  const payload = await getTestingResult(themeId);
  if (payload.status < 400) {
    console.log('payload.data.results', payload.data.results);
    dispatch(getTestingResultsSuccess(payload.data.results));
    return payload;
  }

  dispatch(getTestingResultsError(payload));
};
