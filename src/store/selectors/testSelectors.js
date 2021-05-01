import { createSelector } from '@reduxjs/toolkit';
import { preperedResults } from '../../utils/preperedResults';

export const getTest = state => state.test;
export const getTests = state => state.tests;
export const getTesting = state => state.testing;
export const getTestingResults = state => state.testingResults;

export const getUpdatedTestingResults = createSelector(
  getTestingResults,
  testingResults =>
    testingResults.map(result => {
      const currentFotmatresult = preperedResults(result);
      return currentFotmatresult;
    })
);

export const getResultById = createSelector(
  getUpdatedTestingResults,
  (_, resultId) => resultId,
  (testingResults, resultId) =>
    testingResults.find(result => result._id === resultId)
);

export const getTestsByThemeId = createSelector(
  getTests,
  (_, themeId) => themeId,
  (tests, themeId) => tests.filter(test => test.themeId === themeId)
);
