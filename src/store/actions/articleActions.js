import { createAction } from '@reduxjs/toolkit';

export const getArticlesRequest = createAction('GET_ARTICLES_REQUEST');
export const getArticlesSuccess = createAction('GET_ARTICLES_SUCCESS');
export const getArticlesError = createAction('GET_ARTICLES_ERROR');

export const createArticleRequest = createAction('CREATE_ARTICLE_REQUEST');
export const createArticleSuccess = createAction('CREATE_ARTICLE_SUCCESS');
export const createArticleError = createAction('CREATE_ARTICLE_ERROR');

export const updateArticleRequest = createAction('UPDATE_ARTICLE_REQUEST');
export const updateArticleSuccess = createAction('UPDATE_ARTICLE_SUCCESS');
export const updateArticleError = createAction('UPDATE_ARTICLE_ERROR');

export const deleteArticleRequest = createAction('DELETE_ARTICLE_REQUEST');
export const deleteArticleSuccess = createAction('DELETE_ARTICLE_SUCCESS');
export const deleteArticleError = createAction('DELETE_ARTICLE_ERROR');
