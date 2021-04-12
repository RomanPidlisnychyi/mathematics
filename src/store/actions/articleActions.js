import { createAction } from '@reduxjs/toolkit';

export const getArticlesRequest = createAction('GET_ARTICLES_REQUEST');
export const getArticlesSuccess = createAction('GET_ARTICLES_SUCCESS');
export const getArticlesError = createAction('GET_ARTICLES_ERROR');

export const addArticleRequest = createAction('ADD_ARTICLE_REQUEST');
export const addArticleSuccess = createAction('ADD_ARTICLE_SUCCESS');
export const addArticleError = createAction('ADD_ARTICLE_ERROR');

export const updateArticleRequest = createAction('UPDATE_ARTICLE_REQUEST');
export const updateArticleSuccess = createAction('UPDATE_ARTICLE_SUCCESS');
export const updateArticleError = createAction('UPDATE_ARTICLE_ERROR');

export const deleteArticleRequest = createAction('DELETE_ARTICLE_REQUEST');
export const deleteArticleSuccess = createAction('DELETE_ARTICLE_SUCCESS');
export const deleteArticleError = createAction('DELETE_ARTICLE_ERROR');
