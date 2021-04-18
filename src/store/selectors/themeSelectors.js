import { createSelector } from '@reduxjs/toolkit';

export const getThemes = state => state.themes;

export const getThemeById = createSelector(
  getThemes,
  (_, themeId) => themeId,
  (themes, themeId) => themes.find(theme => theme._id === themeId)
);

export const getThemesBySectionId = createSelector(
  getThemes,
  (_, sectionId) => sectionId,
  (themes, sectionId) => themes.filter(theme => theme.sectionId === sectionId)
);
