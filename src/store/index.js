import { configureStore } from '@reduxjs/toolkit';
import { authReducer, loadingReducer } from './reducers';
import { vacancies } from './reducers/vacancyReducer';
import filter from './reducers/filterReducer';
import { statuses } from './reducers/statusesReduser';

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    vacancies,
    statuses,
    filter,
  },
});

export default store;
