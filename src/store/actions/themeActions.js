import { createAction } from '@reduxjs/toolkit';

export const getThemesRequest = createAction('GET_THEMES_REQUEST');
export const getThemesSuccess = createAction('GET_THEMES_SUCCESS');
export const getThemesError = createAction('GET_THEMES_ERROR');

export const createThemeRequest = createAction('CREATE_THEME_REQUEST');
export const createThemeSuccess = createAction('CREATE_THEME_SUCCESS');
export const createThemeError = createAction('CREATE_THEME_ERROR');
