import { getTests, createTest, getTestById } from '../../utils/apiUtils';
import {
  getTestsRequest,
  getTestsSuccess,
  getTestsError,
  createTestRequest,
  createTestSuccess,
  createTestError,
  getTestByIdRequest,
  getTestByIdSuccess,
  getTestByIdError,
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

export const onGetTestById = testId => async dispatch => {
  dispatch(getTestByIdRequest());

  const payload = await getTestById(testId);

  if (payload.status < 400) {
    dispatch(getTestByIdSuccess(payload.data.test));
    return payload.data.test;
  }

  dispatch(getTestByIdError(payload));
};
