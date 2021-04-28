import {
  getTests,
  createTest,
  getTesting,
  createTestingResult,
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
  console.log('payload', payload);
  if (payload.status < 400) {
    dispatch(createTestingResultSuccess(payload.data.test));
    return payload;
  }

  dispatch(createTestingResultError(payload));
};
