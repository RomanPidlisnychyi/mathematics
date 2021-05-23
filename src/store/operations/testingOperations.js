import {
  getTestingRequest,
  getTestingSuccess,
  getTestingError,
  createTestingResultRequest,
  createTestingResultSuccess,
  createTestingResultError,
  getTestingResultsRequest,
  getTestingResultsSuccess,
  getTestingResultsError,
  getTestingResultByIdRequest,
  getTestingResultByIdSuccess,
  getTestingResultByIdError,
} from '../actions/testingActions';
import { fetching } from '../../utils/apiUtils';

export const onGetTesting = themeId => async dispatch => {
  dispatch(getTestingRequest());

  const option = {
    method: 'get',
    path: `/testing/${themeId}`,
  };

  const payload = await fetching(option);

  if (payload.status < 400) {
    dispatch(getTestingSuccess(payload.data.tests));
    return;
  }

  dispatch(getTestingError(payload));
};

export const onCreateTestingResult =
  ({ themeId, testing }) =>
  async dispatch => {
    dispatch(createTestingResultRequest());

    const option = {
      method: 'post',
      path: `/testing/${themeId}`,
      credentials: testing,
    };

    const payload = await fetching(option);
    if (payload.status < 400) {
      dispatch(createTestingResultSuccess(payload.data.testing));
      return payload.data.testing;
    }

    dispatch(createTestingResultError(payload));
  };

export const onGetTestingResults = themeId => async dispatch => {
  dispatch(getTestingResultsRequest());

  const option = {
    method: 'get',
    path: `/testing/results/${themeId}`,
  };

  const payload = await fetching(option);
  if (payload.status < 400) {
    dispatch(getTestingResultsSuccess(payload.data.results));
    return payload;
  }

  dispatch(getTestingResultsError(payload));
};

export const onGetTestingResultById = testingId => async dispatch => {
  dispatch(getTestingResultByIdRequest());

  const option = {
    method: 'get',
    path: `/testing/resultsById/${testingId}`,
  };

  const payload = await fetching(option);
  if (payload.status < 400) {
    dispatch(getTestingResultByIdSuccess(payload.data.result));
    return payload;
  }

  dispatch(getTestingResultByIdError(payload));
};
