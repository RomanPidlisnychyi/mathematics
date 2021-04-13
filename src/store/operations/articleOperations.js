import {
  getArticlesRequest,
  getArticlesSuccess,
  getArticlesError,
  createArticleRequest,
  createArticleSuccess,
  createArticleError,
} from '../actions/articleActions';
import { onCleanMessage } from './authOperations';
import { getArticles, createArticle } from '../../utils/apiUtils';

export const onGetArticles = () => async dispatch => {
  dispatch(getArticlesRequest());

  const payload = await getArticles();
  if (payload.status < 400) {
    dispatch(getArticlesSuccess(payload.data));
    return;
  }

  dispatch(getArticlesError(payload));
  dispatch(onCleanMessage());
};

export const onCreateArticle = credentials => async dispatch => {
  dispatch(createArticleRequest());

  const payload = await createArticle(credentials);
  if (payload.status < 400) {
    dispatch(createArticleSuccess(payload.data));
    return payload;
  }

  dispatch(createArticleError(payload));
  dispatch(onCleanMessage());
};
