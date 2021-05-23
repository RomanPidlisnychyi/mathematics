import {
  getSectionsRequest,
  getSectionsSuccess,
  getSectionsError,
  createSectionRequest,
  createSectionSuccess,
  createSectionError,
} from '../actions/sectionActions';
import { onCleanMessage } from '../operations/authOperations';
import { fetching } from '../../utils/apiUtils';
import { asyncWrapper } from '../../utils/asyncWrapper';

export const onGetSections = articleId => async dispatch => {
  dispatch(getSectionsRequest());

  const option = {
    method: 'get',
    path: `/sections/${articleId}`,
  };

  const payload = await asyncWrapper(fetching(option));

  if (payload.status < 400) {
    dispatch(getSectionsSuccess(payload.data));
    return payload.data.sections;
  }

  dispatch(getSectionsError(payload));
};

export const onCreateSection =
  ({ articleId, name }) =>
  async dispatch => {
    dispatch(createSectionRequest());

    const option = {
      method: 'post',
      path: `/sections/${articleId}`,
      credentials: name,
    };

    const payload = await asyncWrapper(fetching(option));

    if (payload.status < 400) {
      dispatch(createSectionSuccess(payload.data));
      return payload;
    }

    dispatch(createSectionError(payload));
    dispatch(onCleanMessage());
  };
