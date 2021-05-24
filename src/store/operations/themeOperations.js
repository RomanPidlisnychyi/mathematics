import {
  getThemesRequest,
  getThemesSuccess,
  getThemesError,
  createThemeRequest,
  createThemeSuccess,
  createThemeError,
  deleteThemeRequest,
  deleteThemeSuccess,
  deleteThemeError,
  getThemesByQueryRequest,
  getThemesByQuerySuccess,
  getThemesByQueryError,
  getPathToThemeRequest,
  getPathToThemeSuccess,
  getPathToThemeError,
} from '../actions/themeActions';
import { onCleanMessage } from './authOperations';
import { fetching } from '../../utils/apiUtils';

export const onGetThemes = sectionId => async dispatch => {
  dispatch(getThemesRequest());

  const option = {
    method: 'get',
    path: `/themes/${sectionId}`,
  };

  const payload = await fetching(option);

  if (payload.status < 400) {
    dispatch(getThemesSuccess(payload.data));
    return;
  }

  dispatch(getThemesError(payload));
};

export const onCreateTheme =
  ({ name, sectionId }) =>
  async dispatch => {
    dispatch(createThemeRequest());

    const option = {
      method: 'post',
      path: `/themes/${sectionId}`,
      credentials: { name },
    };

    const payload = await fetching(option);
    if (payload.status < 400) {
      dispatch(createThemeSuccess(payload.data));
      return payload;
    }

    dispatch(createThemeError(payload));
    dispatch(onCleanMessage());
  };

export const onDeleteTheme = themeId => async dispatch => {
  dispatch(deleteThemeRequest());

  const option = {
    method: 'delete',
    path: `/themes/${themeId}`,
  };

  const payload = await fetching(option);

  if (payload.status < 400) {
    dispatch(deleteThemeSuccess(themeId));
    return;
  }

  dispatch(deleteThemeError(payload));
  dispatch(onCleanMessage());
};

export const onGetThemesByQuery = query => async dispatch => {
  dispatch(getThemesByQueryRequest());

  const option = {
    method: 'get',
    path: `/themes/query/?${query}`,
  };

  const payload = await fetching(option);

  if (payload.status < 400) {
    dispatch(getThemesByQuerySuccess(payload.data.themes));
    return payload.data.themes;
  }

  dispatch(getThemesByQueryError(payload));
};

export const onGetThemePath = theme => async dispatch => {
  dispatch(getPathToThemeRequest());

  const option = {
    method: 'post',
    path: '/themes/theme',
    credentials: theme,
  };

  const payload = await fetching(option);

  if (payload.status < 400) {
    dispatch(getPathToThemeSuccess(payload.data.path));
    return payload.data.path;
  }

  dispatch(getPathToThemeError(payload));
};
