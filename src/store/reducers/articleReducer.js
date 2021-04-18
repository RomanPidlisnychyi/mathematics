import { createReducer } from '@reduxjs/toolkit';
import { CreateArticleSectionForm } from '../../components/Forms';
import {
  getArticlesSuccess,
  createArticleSuccess,
} from '../actions/articleActions';
import {
  getSectionsSuccess,
  createSectionSuccess,
} from '../actions/sectionActions';
import { getThemesSuccess, createThemeSuccess } from '../actions/themeActions';

const getArticleSections = (state, { payload }) => {
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

const createArticleSection = (state, { payload }) => {
  const articleId = payload.section.articleId;

  return state.map(article => {
    if (article._id === articleId) {
      return { ...article, sections: [...article.sections, payload.section] };
    }
    return article;
  });
};

const getThemes = (state, { payload }) => {
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

const createTheme = (state, { payload }) => {
  const articleId = payload.section.articleId;

  return state.map(article => {
    if (article._id === articleId) {
      return { ...article, sections: [...article.sections, payload.section] };
    }
    return article;
  });
};

export const articles = createReducer([], {
  [getArticlesSuccess]: (_, { payload }) => payload,
  [createArticleSuccess]: (state, { payload }) => [...state, payload.article],
  [getSectionsSuccess]: getArticleSections,
  [createSectionSuccess]: createArticleSection,
  [getThemesSuccess]: getThemes,
  [createThemeSuccess]: createTheme,
});
