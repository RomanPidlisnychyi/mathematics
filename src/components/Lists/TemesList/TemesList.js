import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onGetSections } from '../../../store/operations/sectionOperations';
import { getArticleById } from '../../../store/selectors/articleSelectors';

export default function TemesList({ pathname, articleId }) {
  const dispatch = useDispatch();
  const article = useSelector(state => getArticleById(state, articleId));

  useEffect(() => {
    if (articleId && article && !article.sections) {
      dispatch(onGetSections(articleId));
    }
  }, [dispatch, articleId, article]);

  return (
    <ul>
      {article &&
        article.sections &&
        article.sections.map(({ _id, name }) => (
          <li key={_id}>
            <Link to={`${pathname}/${_id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  );
}
