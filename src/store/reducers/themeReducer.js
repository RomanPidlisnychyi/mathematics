import { createReducer } from '@reduxjs/toolkit';
import {
  getThemesSuccess,
  createThemeSuccess,
  deleteThemeSuccess,
} from '../actions/themeActions';

export const themes = createReducer([], {
  [getThemesSuccess]: (state, { payload }) => [...state, ...payload.themes],
  [createThemeSuccess]: (state, { payload }) => [...state, payload.theme],
  [deleteThemeSuccess]: (state, { payload }) =>
    state.filter(theme => theme._id !== payload),
});
