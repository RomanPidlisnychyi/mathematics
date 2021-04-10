import {
  createVacancyRequest,
  createVacancySuccess,
  createVacancyError,
  updateVacancyRequest,
  updateVacancySuccess,
  updateVacancyError,
  deleteVacancyRequest,
  deleteVacancySuccess,
  deleteVacancyError,
} from '../actions/vacancyActions';
import {
  createVacancy,
  updateVacancy,
  deleteVacancy,
} from '../../utils/apiUtils';

export const onCreateVacancy = vacancy => async dispatch => {
  dispatch(createVacancyRequest());

  const payload = await createVacancy(vacancy);

  if (payload._id) {
    dispatch(createVacancySuccess(payload));
    return payload;
  }

  dispatch(createVacancyError());
};

export const onUpdateVacancy = (credentials, id) => async dispatch => {
  dispatch(updateVacancyRequest());

  const payload = await updateVacancy(credentials, id);

  if (payload._id) {
    dispatch(updateVacancySuccess(payload));
    return payload;
  }

  dispatch(updateVacancyError());
};

export const onDeleteVacancy = vacancyId => async dispatch => {
  dispatch(deleteVacancyRequest());

  const status = await deleteVacancy(vacancyId);

  if (status < 400) {
    dispatch(deleteVacancySuccess(vacancyId));
    return status;
  }
  dispatch(deleteVacancyError());
};
