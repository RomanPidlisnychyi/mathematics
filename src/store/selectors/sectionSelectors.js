import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from './articleSelectors';

export const getSectionById = createSelector(
  getArticles,
  (_, sectionId) => sectionId,
  (articles, sectionId) =>
    articles.find(article => {
      if (article.sections) {
        return article.sections.find(section => section._id === sectionId);
      }
    })
);
