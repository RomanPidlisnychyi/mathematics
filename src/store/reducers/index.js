import { combineReducers } from 'redux';
import auth from './authReducer';
import { loading } from './loadingReducer';
import { articles } from './articleReducer';
import { sections } from './sectionReducer';
import { themes } from './themeReducer';
import { tests, test } from './testReducer';
import { testing, testingResults, testingResult } from './testingReducer';
import filter from './filterReducer';

export default combineReducers({
  auth,
  articles,
  sections,
  themes,
  tests,
  testing,
  testingResults,
  testingResult,
  test,
  filter,
  loading,
});
