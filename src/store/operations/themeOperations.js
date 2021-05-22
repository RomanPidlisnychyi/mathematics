import {
  getThemesRequest,
  getThemesSuccess,
  getThemesError,
  createThemeRequest,
  createThemeSuccess,
  createThemeError,
  getThemesByQueryRequest,
  getThemesByQuerySuccess,
  getThemesByQueryError,
  getPathToThemeRequest,
  getPathToThemeSuccess,
  getPathToThemeError,
} from '../actions/themeActions';
import {
  getThemes,
  createTheme,
  getThemesByQuery,
  getThemePath,
} from '../../utils/apiUtils';
import { asyncWrapper } from '../../utils/asyncWrapper';

export const onGetThemes = sectionId => async dispatch => {
  dispatch(getThemesRequest());

  const payload = await asyncWrapper(getThemes(sectionId));

  if (payload.status < 400) {
    dispatch(getThemesSuccess(payload.data));
    return;
  }

  dispatch(getThemesError(payload));
};

export const onCreateTheme = credentials => async dispatch => {
  dispatch(createThemeRequest());

  const payload = await asyncWrapper(createTheme(credentials));
  if (payload.status < 400) {
    dispatch(createThemeSuccess(payload.data));
    return payload;
  }

  dispatch(createThemeError(payload));
};

export const onGetThemesByQuery = query => async dispatch => {
  dispatch(getThemesByQueryRequest());

  const payload = await asyncWrapper(getThemesByQuery(query));

  if (payload.status < 400) {
    dispatch(getThemesByQuerySuccess(payload.data.themes));
    return payload.data.themes;
  }

  dispatch(getThemesByQueryError(payload));
};

export const onGetThemePath = theme => async dispatch => {
  dispatch(getPathToThemeRequest());

  const payload = await asyncWrapper(getThemePath(theme));

  if (payload.status < 400) {
    dispatch(getPathToThemeSuccess(payload.data.path));
    return payload.data.path;
  }

  dispatch(getPathToThemeError(payload));
};
