import { createSelector } from '@reduxjs/toolkit';
import { preperedResults } from '../../utils/preperedResults';

export const getTest = state => state.test;
export const getTests = state => state.tests;
export const getTesting = state => state.testing;
export const getTestingResults = state => state.testingResults;

export const getUpdatedTestingResults = createSelector(
  getTestingResults,
  testingResults => testingResults.map(result => preperedResults(result))
);

export const getTestingResultById = state => state.testingResult;
export const getUpdatedTestingResultById = createSelector(
  getTestingResultById,
  result => preperedResults(result)
);

export const getTestsByThemeId = createSelector(
  getTests,
  (_, themeId) => themeId,
  (tests, themeId) => tests.filter(test => test.themeId === themeId)
);
