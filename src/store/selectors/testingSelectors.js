import { createSelector } from '@reduxjs/toolkit';
import { preperedResults } from '../../utils/preperedResults';

export const getTesting = state => state.testing;
export const getTestingResults = state => state.testingResults;

export const getReversedTestingResults = createSelector(
  getTestingResults,
  testingResults => [...testingResults].reverse()
);

export const getUpdatedTestingResults = createSelector(
  getReversedTestingResults,
  testingResults => testingResults.map(result => preperedResults(result))
);

export const getTestingResultById = state => state.testingResult;
export const getUpdatedTestingResultById = createSelector(
  getTestingResultById,
  result => preperedResults(result)
);
