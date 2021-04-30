import { createSelector } from '@reduxjs/toolkit';

export const getTest = state => state.test;
export const getTests = state => state.tests;
export const getTesting = state => state.testing;
export const getTestingResults = state => state.testingResults;

export const getTestsByThemeId = createSelector(
  getTests,
  (_, themeId) => themeId,
  (tests, themeId) => tests.filter(test => test.themeId === themeId)
);
