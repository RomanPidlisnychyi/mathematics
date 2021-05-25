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
import { fetching } from '../../utils/apiUtils';
import { requestCash } from '../../utils/requestCash';

export const onGetArticles = () => async dispatch => {
  dispatch(getArticlesRequest());

  const option = {
    method: 'get',
    path: '/articles',
  };

  // const payload = await fetching(option);
  const payload = await requestCash(option);
  if (payload.status < 400) {
    dispatch(getArticlesSuccess(payload.data));
    return;
  }

  dispatch(getArticlesError(payload));
  dispatch(onCleanMessage());
};

export const onCreateArticle = credentials => async dispatch => {
  dispatch(createArticleRequest());

  const option = {
    method: 'post',
    path: '/articles',
    credentials,
  };

  const payload = await fetching(option);
  if (payload.status < 400) {
    dispatch(createArticleSuccess(payload.data));
    return payload;
  }

  dispatch(createArticleError(payload));
  dispatch(onCleanMessage());
};

export const onDeleteArticle = id => async dispatch => {
  dispatch(deleteArticleRequest());

  const option = {
    method: 'delete',
    path: `/articles/${id}`,
  };

  const payload = await fetching(option);
  if (payload.status < 400) {
    dispatch(deleteArticleSuccess(id));
    return payload;
  }

  dispatch(deleteArticleError(payload));
  dispatch(onCleanMessage());
};
