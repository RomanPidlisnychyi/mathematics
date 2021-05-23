import { createReducer } from '@reduxjs/toolkit';
import {
  getSectionsSuccess,
  createSectionSuccess,
  deleteSectionSuccess,
} from '../actions/sectionActions';

export const sections = createReducer([], {
  [getSectionsSuccess]: (state, { payload }) => [...state, ...payload.sections],
  [createSectionSuccess]: (state, { payload }) => [...state, payload.section],
  [deleteSectionSuccess]: (state, { payload }) =>
    state.filter(section => section._id !== payload),
});
