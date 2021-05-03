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
} from '../actions/themeActions';
import { getThemes, createTheme, getThemesByQuery } from '../../utils/apiUtils';

export const onGetThemes = sectionId => async dispatch => {
  dispatch(getThemesRequest());

  const payload = await getThemes(sectionId);

  if (payload && payload.status < 400) {
    dispatch(getThemesSuccess(payload.data));
    return;
  }

  dispatch(getThemesError(payload));
};

export const onCreateTheme = credentials => async dispatch => {
  dispatch(createThemeRequest());

  const payload = await createTheme(credentials);
  if (payload && payload.status < 400) {
    dispatch(createThemeSuccess(payload.data));
    return payload;
  }

  dispatch(createThemeError(payload));
};

export const onGetThemesByQuery = query => async dispatch => {
  dispatch(getThemesByQueryRequest());

  const payload = await getThemesByQuery(query);

  if (payload && payload.status < 400) {
    dispatch(getThemesByQuerySuccess(payload.data.themes));
    return payload.data.themes;
  }

  dispatch(getThemesByQueryError(payload));
};
