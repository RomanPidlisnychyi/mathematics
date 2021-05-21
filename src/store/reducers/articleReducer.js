import { createReducer } from '@reduxjs/toolkit';
import {
  getArticlesSuccess,
  createArticleSuccess,
  deleteArticleSuccess,
} from '../actions/articleActions';

export const articles = createReducer([], {
  [getArticlesSuccess]: (_, { payload }) => payload,
  [createArticleSuccess]: (state, { payload }) => [...state, payload.article],
  [deleteArticleSuccess]: (state, { payload }) =>
    state.filter(article => article._id !== payload),
});
