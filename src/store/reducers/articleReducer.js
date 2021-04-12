import { createReducer } from '@reduxjs/toolkit';
import { getArticlesSuccess } from '../actions/articleActions';

export const articles = createReducer([], {
  [getArticlesSuccess]: (_, { payload }) => payload,
});
