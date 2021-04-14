import {
  getSectionRequest,
  getSectionSuccess,
  getSectionError,
  createSectionRequest,
  createSectionSuccess,
  createSectionError,
} from '../actions/sectionActions';
import { getSections, createSection } from '../../utils/apiUtils';

export const onGetSections = articleId => async dispatch => {
  dispatch(getSectionRequest());

  const payload = await getSections(articleId);

  if (payload && payload.status < 400) {
    dispatch(getSectionSuccess(payload.data));
    return;
  }

  dispatch(getSectionError(payload));
};

export const onCreateSection = credentials => async dispatch => {
  dispatch(createSectionRequest());

  const payload = await createSection(credentials);

  if (payload && payload.status < 400) {
    dispatch(createSectionSuccess(payload.data));
    return;
  }

  dispatch(createSectionError(payload));
};
