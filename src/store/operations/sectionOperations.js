import {
  getSectionsRequest,
  getSectionsSuccess,
  getSectionsError,
  createSectionRequest,
  createSectionSuccess,
  createSectionError,
} from '../actions/sectionActions';
import { getSections, createSection } from '../../utils/apiUtils';

export const onGetSections = articleId => async dispatch => {
  dispatch(getSectionsRequest());

  const payload = await getSections(articleId);

  if (payload && payload.status < 400) {
    dispatch(getSectionsSuccess(payload.data));
    return payload.data.sections;
  }

  dispatch(getSectionsError(payload));
};

export const onCreateSection = credentials => async dispatch => {
  dispatch(createSectionRequest());

  const payload = await createSection(credentials);

  if (payload && payload.status < 400) {
    dispatch(createSectionSuccess(payload.data));
    return payload;
  }

  dispatch(createSectionError(payload));
};
