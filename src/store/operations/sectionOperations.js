import {
  getSectionsRequest,
  getSectionsSuccess,
  getSectionsError,
  createSectionRequest,
  createSectionSuccess,
  createSectionError,
} from '../actions/sectionActions';
import { onCleanMessage } from '../operations/authOperations';
import { getSections, createSection } from '../../utils/apiUtils';
import { asyncWrapper } from '../../utils/asyncWrapper';

export const onGetSections = articleId => async dispatch => {
  dispatch(getSectionsRequest());

  const payload = await asyncWrapper(getSections(articleId));

  if (payload.status < 400) {
    dispatch(getSectionsSuccess(payload.data));
    return payload.data.sections;
  }

  dispatch(getSectionsError(payload));
};

export const onCreateSection = credentials => async dispatch => {
  dispatch(createSectionRequest());

  const payload = await asyncWrapper(createSection(credentials));

  if (payload.status < 400) {
    dispatch(createSectionSuccess(payload.data));
    return payload;
  }

  dispatch(createSectionError(payload));
  dispatch(onCleanMessage());
};
