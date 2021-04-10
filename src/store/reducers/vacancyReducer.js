import { createReducer } from '@reduxjs/toolkit';
import {
  getAllVacancies,
  createVacancySuccess,
  updateVacancySuccess,
  deleteVacancySuccess,
} from '../actions/vacancyActions';
import { refreshError, currentError } from '../actions/authActions';

const createVacancy = (state, { payload }) => [...state, payload];

const updateVacancy = (state, { payload }) =>
  state.map(vacancy => {
    if (vacancy._id === payload._id) {
      return payload;
    }

    return vacancy;
  });

const deleteVacancy = (state, { payload }) =>
  state.filter(vacancy => vacancy._id !== payload);

export const vacancies = createReducer([], {
  [getAllVacancies]: (_, { payload }) => payload,
  [createVacancySuccess]: createVacancy,
  [updateVacancySuccess]: updateVacancy,
  [deleteVacancySuccess]: deleteVacancy,
  [currentError]: () => [],
  [refreshError]: () => [],
});
