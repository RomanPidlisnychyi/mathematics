import { combineReducers } from 'redux';
import auth from './authReducer';
import { loading } from './loadingReducer';
import { articles } from './articleReducer';
import { sections } from './sectionReducer';
import { themes } from './themeReducer';
import { tests, testing, testingResults, test } from './testReducer';
import filter from './filterReducer';

export default combineReducers({
  auth,
  articles,
  sections,
  themes,
  tests,
  testing,
  testingResults,
  test,
  filter,
  loading,
});
