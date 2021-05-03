import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticleById } from '../../store/selectors/articleSelectors';
import { getSectionById } from '../../store/selectors/sectionSelectors';
import { getThemeById } from '../../store/selectors/themeSelectors';
import { onGetSections } from '../../store/operations/sectionOperations';
import { onGetThemes } from '../../store/operations/themeOperations';
import { onGetTesting } from '../../store/operations/testOperations';

export default function Title({ match }) {
  const dispatch = useDispatch();
  const articleId = match.params.articleId;
  const sectionId = match.params.sectionId;
  const themeId = match.params.themeId;
  const isTesting = match.path.includes('/test');
  const isResults = match.path.includes('/results');
  const resultId = match.params.resultId;

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
    if (isTesting) {
      dispatch(onGetTesting(themeId));
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
      {isResults && (
        <span>
          {' '}
          -{' '}
          <Link to={`/articles/${articleId}/${sectionId}/${themeId}/results`}>
            Результати
          </Link>
        </span>
      )}
      {isTesting && (
        <span>
          {' '}
          -{' '}
          <Link
            to={`/articles/${articleId}/${sectionId}/${themeId}/results/test`}
          >
            Тестування
          </Link>
        </span>
      )}
      {resultId && (
        <span>
          {' '}
          -{' '}
          <Link
            to={`/articles/${articleId}/${sectionId}/${themeId}/results/${resultId}`}
          >
            Тест
          </Link>
        </span>
      )}
    </h3>
  );
}
