import { configureStore } from '@reduxjs/toolkit';
import { authReducer, loadingReducer } from './reducers';
import { articles } from './reducers/articleReducer';
import { sections } from './reducers/sectionReducer';
import filter from './reducers/filterReducer';
import { tests } from './reducers/testReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    filter,
    articles,
    sections,
    tests,
  },
});

export default store;
