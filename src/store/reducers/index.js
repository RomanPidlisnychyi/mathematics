import { combineReducers } from 'redux';
import auth from './authReducer';
import { loading } from './loadingReducer';
import { articles } from './articleReducer';
import { tests } from './testReducer';
import filter from './filterReducer';

export default combineReducers({
  auth,
  articles,
  tests,
  filter,
  loading,
});
