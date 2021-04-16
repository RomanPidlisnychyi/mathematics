import { createReducer } from '@reduxjs/toolkit';
import {
  getArticlesSuccess,
  createArticleSuccess,
} from '../actions/articleActions';
import { getSectionSuccess } from '../actions/sectionActions';

const updateArticle = (state, { payload }) => {
  if (payload && payload.sections.length) {
    const articleId = payload.sections[0].articleId;

    return state.map(article => {
      if (article._id === articleId) {
        return { ...article, sections: payload.sections };
      }
      return article;
    });
  }

  return state;
};

export const articles = createReducer([], {
  [getArticlesSuccess]: (_, { payload }) => payload,
  [createArticleSuccess]: (state, { payload }) => [...state, payload.article],
  [getSectionSuccess]: updateArticle,
});
