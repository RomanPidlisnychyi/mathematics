import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticleById } from '../../store/selectors/articleSelectors';
import { getSectionById } from '../../store/selectors/sectionSelectors';
import { getThemeById } from '../../store/selectors/themeSelectors';
import { onGetSections } from '../../store/operations/sectionOperations';
import { onGetThemes } from '../../store/operations/themeOperations';

export default function Title({ match }) {
  const dispatch = useDispatch();
  const articleId = match.params.articleId;
  const sectionId = match.params.sectionId;
  const themeId = match.params.themeId;

  const article = useSelector(state => getArticleById(state, articleId));
  const section = useSelector(state => getSectionById(state, sectionId));
  const theme = useSelector(state => getThemeById(state, themeId));

  useEffect(() => {
    if (sectionId && !section) {
      dispatch(onGetSections(articleId));
    }
    if (themeId && !theme) {
      dispatch(onGetThemes(sectionId));
    }
  }, [dispatch]);

  return (
    <h3>
      {article && (
        <span>
          <Link to={`/articles/${articleId}`}>{article.name}</Link>
        </span>
      )}
      {section && (
        <span>
          {' '}
          -{' '}
          <Link to={`/articles/${articleId}/${sectionId}`}>{section.name}</Link>
        </span>
      )}
      {theme && (
        <span>
          {' '}
          -{' '}
          <Link to={`/articles/${articleId}/${sectionId}/${themeId}`}>
            {theme.name}
          </Link>
        </span>
      )}
    </h3>
  );
}
