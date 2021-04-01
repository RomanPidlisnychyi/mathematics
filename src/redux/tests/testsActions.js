import { createAction } from '@reduxjs/toolkit';

const createQuestion = createAction('CREATE_QUESTION');
const removeQuestion = createAction('REMOVE_QUESTION');
const updateQuestion = createAction('UPDATE_QUESTION');

export default {
  createQuestion,
  removeQuestion,
  updateQuestion,
};
