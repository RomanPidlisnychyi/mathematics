import {
  getSectionsRequest,
  getSectionsSuccess,
  getSectionsError,
  createSectionRequest,
  createSectionSuccess,
  createSectionError,
  deleteSectionRequest,
  deleteSectionSuccess,
  deleteSectionError,
} from '../actions/sectionActions';
import { onCleanMessage } from '../operations/authOperations';
import { fetching } from '../../utils/apiUtils';

export const onGetSections = articleId => async dispatch => {
  dispatch(getSectionsRequest());

  const option = {
    method: 'get',
    path: `/sections/${articleId}`,
  };

  const payload = await fetching(option);

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
      credentials: { name },
    };

    const payload = await fetching(option);

    if (payload.status < 400) {
      dispatch(createSectionSuccess(payload.data));
      return payload;
    }

    dispatch(createSectionError(payload));
    dispatch(onCleanMessage());
  };

export const onDeleteSection = id => async dispatch => {
  dispatch(deleteSectionRequest());

  const option = {
    method: 'delete',
    path: `/sections/${id}`,
  };

  const payload = await fetching(option);
  if (payload.status < 400) {
    dispatch(deleteSectionSuccess(id));
    return payload;
  }

  dispatch(deleteSectionError(payload));
  dispatch(onCleanMessage());
};
