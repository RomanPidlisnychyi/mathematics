import { createSelector } from '@reduxjs/toolkit';

export const getArticles = state => state.articles;
export const getArticleById = createSelector(
  getArticles,
  (_, id) => id,
  (articles, articleId) => articles.find(article => article._id === articleId)
);
