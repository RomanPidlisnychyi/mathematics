import {
  getArticlesRequest,
  getArticlesSuccess,
  getArticlesError,
  createArticleRequest,
  createArticleSuccess,
  createArticleError,
  deleteArticleRequest,
  deleteArticleSuccess,
  deleteArticleError,
} from '../actions/articleActions';
import { onCleanMessage } from './authOperations';
import {
  getArticles,
  createArticle,
  deleteArticle,
} from '../../utils/apiUtils';

import { asyncWrapper } from '../../utils/asyncWrapper';

export const onGetArticles = () => async dispatch => {
  dispatch(getArticlesRequest());

  const payload = await asyncWrapper(getArticles());
  if (payload.status < 400) {
    dispatch(getArticlesSuccess(payload.data));
    return;
  }

  dispatch(getArticlesError(payload));
  dispatch(onCleanMessage());
};

export const onCreateArticle = credentials => async dispatch => {
  dispatch(createArticleRequest());

  const payload = await asyncWrapper(createArticle(credentials));
  if (payload.status < 400) {
    dispatch(createArticleSuccess(payload.data));
    return payload;
  }

  dispatch(createArticleError(payload));
  dispatch(onCleanMessage());
};

export const onDeleteArticle = id => async dispatch => {
  dispatch(deleteArticleRequest());

  const payload = await asyncWrapper(deleteArticle(id));
  if (payload.status < 400) {
    dispatch(deleteArticleSuccess(id));
    return payload;
  }

  dispatch(deleteArticleError(payload));
  dispatch(onCleanMessage());
};
