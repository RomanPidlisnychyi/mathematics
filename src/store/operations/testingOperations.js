import {
  getTesting,
  createTestingResult,
  getTestingResults,
  getTestingResultById,
} from '../../utils/apiUtils';
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
    return payload.data.testing;
  }

  dispatch(createTestingResultError(payload));
};

export const onGetTestingResults = themeId => async dispatch => {
  dispatch(getTestingResultsRequest());

  const payload = await getTestingResults(themeId);
  if (payload.status < 400) {
    dispatch(getTestingResultsSuccess(payload.data.results));
    return payload;
  }

  dispatch(getTestingResultsError(payload));
};

export const onGetTestingResultById = testingId => async dispatch => {
  dispatch(getTestingResultByIdRequest());

  const payload = await getTestingResultById(testingId);
  if (payload.status < 400) {
    dispatch(getTestingResultByIdSuccess(payload.data.result));
    return payload;
  }

  dispatch(getTestingResultByIdError(payload));
};