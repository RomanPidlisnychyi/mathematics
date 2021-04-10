import { configureStore } from '@reduxjs/toolkit';
import { authReducer, loadingReducer } from './reducers';
import filter from './reducers/filterReducer';
import { tests } from './reducers/testReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    filter,
    tests,
  },
});

export default store;
