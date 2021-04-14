import { createAction } from '@reduxjs/toolkit';

export const getSectionRequest = createAction('GET_SECTION_REQUEST');
export const getSectionSuccess = createAction('GET_SECTION_SUCCESS');
export const getSectionError = createAction('GET_SECTION_ERROR');

export const createSectionRequest = createAction('CREATE_SECTION_REQUEST');
export const createSectionSuccess = createAction('CREATE_SECTION_SUCCESS');
export const createSectionError = createAction('CREATE_SECTION_ERROR');
