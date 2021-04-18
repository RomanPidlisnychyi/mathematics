import { createReducer } from '@reduxjs/toolkit';
import {
  getSectionsSuccess,
  createSectionSuccess,
} from '../actions/sectionActions';

export const sections = createReducer([], {
  [getSectionsSuccess]: (state, { payload }) => [...state, ...payload.sections],
  [createSectionSuccess]: (state, { payload }) => [...state, payload.section],
});
