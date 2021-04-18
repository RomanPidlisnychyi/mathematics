import {
  getThemesRequest,
  getThemesSuccess,
  getThemesError,
  createThemeRequest,
  createThemeSuccess,
  createThemeError,
} from '../actions/themeActions';
import { getThemes, createTheme } from '../../utils/apiUtils';

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
  console.log('payload', payload);
  if (payload && payload.status < 400) {
    dispatch(createThemeSuccess(payload.data));
    return payload;
  }

  dispatch(createThemeError(payload));
};
