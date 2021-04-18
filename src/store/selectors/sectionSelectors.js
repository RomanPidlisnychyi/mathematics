import { createSelector } from '@reduxjs/toolkit';

export const getSections = state => state.sections;

export const getSectionById = createSelector(
  getSections,
  (_, sectionId) => sectionId,
  (sections, sectionId) => sections.find(section => section._id === sectionId)
);

export const getSectionsByArticleId = createSelector(
  getSections,
  (_, atricleId) => atricleId,
  (sections, atricleId) =>
    sections.filter(section => section.articleId === atricleId)
);
