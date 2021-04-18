import { createReducer } from '@reduxjs/toolkit';
import { getThemesSuccess, createThemeSuccess } from '../actions/themeActions';

export const themes = createReducer([], {
  [getThemesSuccess]: (state, { payload }) => [...state, ...payload.themes],
  [createThemeSuccess]: (state, { payload }) => [...state, payload.theme],
});
