import { addTest } from '../../utils/apiUtils';
import {
  addTestRequest,
  addTestSuccess,
  addTestError,
} from '../actions/tetsActions';

export const onAddTest = test => async dispatch => {
  dispatch(addTestRequest());

  const payload = await addTest(test);
};
