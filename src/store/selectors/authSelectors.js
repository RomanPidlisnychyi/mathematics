import { createSelector } from '@reduxjs/toolkit';

export const getName = state => state.auth.user.name;
export const getEmail = state => state.auth.user.email;
export const getStatus = state => state.auth.user.status;
export const getPass = state => state.auth.user.password;
export const getToken = state => state.auth.tokens.access;
export const getMessage = state => state.auth.message;

export const getIsAdmin = createSelector(
  getStatus,
  status => status === 'admin'
);
