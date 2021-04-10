import { createSelector } from '@reduxjs/toolkit';
import { transformDate } from '../../utils/transformDate';
import {
  getFilter,
  getFilterFavorite,
  getFilterStatus,
} from './filterSelectors';

export const getVacancies = state => state.vacancies;

export const getFiltredByFavoriteVacancies = createSelector(
  getVacancies,
  getFilterFavorite,
  (vacancies, isFavorite) =>
    vacancies.filter(vacancy => (isFavorite ? vacancy.favorite : vacancy))
);

export const getFiltredByStatusVacancies = createSelector(
  getFiltredByFavoriteVacancies,
  getFilterStatus,
  (vacancies, status) =>
    vacancies.filter(vacancy => (status ? vacancy.status === status : vacancy))
);

export const getFiltredVacancies = createSelector(
  getFiltredByStatusVacancies,
  getFilter,
  (vacancies, filter) =>
    vacancies.filter(vacancy =>
      vacancy.companyName.toLowerCase().includes(filter.toLowerCase())
    )
);

export const getReversedVacancies = createSelector(
  getFiltredVacancies,
  vacancies => [...vacancies].reverse()
);

export const getVacancy = createSelector(
  getVacancies,
  (_, id) => id,
  (vacancies, id) => {
    if (id === null) {
      return null;
    }
    const vacancy = vacancies.find(vacancy => vacancy._id === id);

    if (!vacancy) {
      return null;
    }
    const currentFormatDate = transformDate(vacancy.date);

    return { ...vacancy, date: currentFormatDate };
  }
);
