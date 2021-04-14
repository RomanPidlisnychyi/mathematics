import { createReducer } from '@reduxjs/toolkit';
import {
  getSectionSuccess,
  createSectionSuccess,
} from '../actions/sectionActions';

export const sections = createReducer([], {
  [getSectionSuccess]: (_, { payload }) => payload.sections,
  [createSectionSuccess]: (state, { payload }) => [...state, payload.section],
});
