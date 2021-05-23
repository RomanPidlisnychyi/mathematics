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
import { fetching } from '../../utils/apiUtils';
import { asyncWrapper } from '../../utils/asyncWrapper';

export const onGetTests = themeId => async dispatch => {
  dispatch(getTestsRequest());

  const option = {
    method: 'get',
    path: `/tests/${themeId}`,
  };

  const payload = await asyncWrapper(fetching(option));

  if (payload.status < 400) {
    dispatch(getTestsSuccess(payload.data.tests));
    return;
  }

  dispatch(getTestsError(payload));
};

export const onCreateTest =
  ({ themeId, test }) =>
  async dispatch => {
    dispatch(createTestRequest());

    const option = {
      method: 'post',
      path: `/tests/${themeId}`,
      credentials: test,
    };

    const payload = await asyncWrapper(fetching(option));
    if (payload.status < 400) {
      dispatch(createTestSuccess(payload.data.test));
      return payload;
    }

    dispatch(createTestError(payload));
  };

export const onGetTestById = testId => async dispatch => {
  dispatch(getTestByIdRequest());

  const option = {
    method: 'get',
    path: `/tests/testId/?testId=${testId}`,
  };

  const payload = await asyncWrapper(fetching(option));

  if (payload.status < 400) {
    dispatch(getTestByIdSuccess(payload.data.test));
    return payload.data.test;
  }

  dispatch(getTestByIdError(payload));
};
