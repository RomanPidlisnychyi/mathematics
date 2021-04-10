import { createAction } from '@reduxjs/toolkit';

export const getAllVacancies = createAction('GET_ALL_VACANCIES');
export const getStatuses = createAction('GET_STATUSES');

export const createVacancyRequest = createAction('CREATE_VACANCY_REQUEST');
export const createVacancySuccess = createAction('CREATE_VACANCY_SUCCESS');
export const createVacancyError = createAction('CREATE_VACANCY_ERROR');

export const updateVacancyRequest = createAction('UPDATE_VACANCY_REQUEST');
export const updateVacancySuccess = createAction('UPDATE_VACANCY_SUCCESS');
export const updateVacancyError = createAction('UPDATE_VACANCY_ERROR');

export const deleteVacancyRequest = createAction('DELETE_VACANCY_REQUEST');
export const deleteVacancySuccess = createAction('DELETE_VACANCY_SUCCESS');
export const deleteVacancyError = createAction('DELETE_VACANCY_ERROR');
