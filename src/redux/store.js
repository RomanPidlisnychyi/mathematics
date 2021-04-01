import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { testsReducer } from './tests';

const store = configureStore({
  reducer: {
    auth: authReducer,
    tests: testsReducer,
  },
});

export default store;
