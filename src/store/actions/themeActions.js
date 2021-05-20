import { createAction } from '@reduxjs/toolkit';

export const getThemesRequest = createAction('GET_THEMES_REQUEST');
export const getThemesSuccess = createAction('GET_THEMES_SUCCESS');
export const getThemesError = createAction('GET_THEMES_ERROR');

export const createThemeRequest = createAction('CREATE_THEME_REQUEST');
export const createThemeSuccess = createAction('CREATE_THEME_SUCCESS');
export const createThemeError = createAction('CREATE_THEME_ERROR');

export const getThemesByQueryRequest = createAction(
  'GET_THEMES_BY_QUERY_REQUEST'
);
export const getThemesByQuerySuccess = createAction(
  'GET_THEMES_BY_QUERY_SUCCESS'
);
export const getThemesByQueryError = createAction('GET_THEMES_BY_QUERY_ERROR');

export const getPathToThemeRequest = createAction('GET_PATH_TO_THEME_REQUEST');
export const getPathToThemeSuccess = createAction('GET_PATH_TO_THEME_SUCCESS');
export const getPathToThemeError = createAction('GET_PATH_TO_THEME_ERROR');
