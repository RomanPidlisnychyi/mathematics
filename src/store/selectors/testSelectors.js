import { createSelector } from '@reduxjs/toolkit';

export const getTest = state => state.test;
export const getTests = state => state.tests;

export const getTestById = createSelector(
  getTests,
  (_, testId) => testId,
  (tests, testId) => tests.find(test => test._id === testId)
);

export const getTestsByThemeId = createSelector(
  getTests,
  (_, themeId) => themeId,
  (tests, themeId) => tests.filter(test => test.themeId === themeId)
);
