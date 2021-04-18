import { createAction } from '@reduxjs/toolkit';

export const getSectionsRequest = createAction('GET_SECTIONS_REQUEST');
export const getSectionsSuccess = createAction('GET_SECTIONS_SUCCESS');
export const getSectionsError = createAction('GET_SECTIONS_ERROR');

export const createSectionRequest = createAction('CREATE_SECTION_REQUEST');
export const createSectionSuccess = createAction('CREATE_SECTION_SUCCESS');
export const createSectionError = createAction('CREATE_SECTION_ERROR');
