import { createSelector } from '@reduxjs/toolkit';
import { getArticles } from './articleSelectors';

export const getSectionById = createSelector(
  getArticles,
  (_, sectionId) => sectionId,
  (articles, sectionId) => {
    let section;

    articles.forEach(article => {
      if (article.sections) {
        const finedSection = article.sections.find(
          section => section._id === sectionId
        );
        if (finedSection) {
          section = finedSection;
        }
      }
    });

    return section;
  }
);

// export const getSectionById = createSelector(
//   getArticles,
//   (_, articleId, sectionId) => ({ articleId, sectionId }),
//   (articles, ids) => {
//     const { articleId, sectionId } = ids;
//     const article = articles.find(article => article._id === articleId);
//     return article.sections.find(section => section._id === sectionId);
//   }
// );
