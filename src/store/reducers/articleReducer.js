import { createReducer } from '@reduxjs/toolkit';
import {
  getArticlesSuccess,
  createArticleSuccess,
} from '../actions/articleActions';

export const articles = createReducer([], {
  [getArticlesSuccess]: (_, { payload }) => payload,
  [createArticleSuccess]: (state, { payload }) => [...state, payload.article],
});
