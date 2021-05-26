import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getArticles,
  getArticleById,
} from '../../store/selectors/articleSelectors';
import { getSectionById } from '../../store/selectors/sectionSelectors';
import { getThemeById } from '../../store/selectors/themeSelectors';
import { getTestById } from '../../store/selectors/testSelectors';
import { onGetArticles } from '../../store/operations/articleOperations';
import { onGetSections } from '../../store/operations/sectionOperations';
import { onGetThemes } from '../../store/operations/themeOperations';
import { onGetTests } from '../../store/operations/testOperations';
import { onGetTesting } from '../../store/operations/testingOperations';

export default function Title({ match }) {
  const dispatch = useDispatch();
  const isArticles = match.path.includes('/articles');
  const articleId = match.params.articleId;
  const sectionId = match.params.sectionId;
  const themeId = match.params.themeId;
  const testId = match.params.testId;

  const isTesting = match.path.includes('/test');
  const isResults = match.path.includes('/results');
  const resultId = match.params.resultId;

  const articles = useSelector(getArticles);
  const article = useSelector(state => getArticleById(state, articleId));
  const section = useSelector(state => getSectionById(state, sectionId));
  const theme = useSelector(state => getThemeById(state, themeId));
  const test = useSelector(state => getTestById(state, testId));

  useEffect(() => {
    if (isArticles && !articles.length) {
      dispatch(onGetArticles());
    }
    if (sectionId && !section) {
      dispatch(onGetSections(articleId));
    }
    if (themeId && !theme) {
      dispatch(onGetThemes(sectionId));
    }
    if (testId && !test) {
      dispatch(onGetTests(themeId));
    }
    if (isTesting) {
      dispatch(onGetTesting(themeId));
    }
  }, [dispatch]);

  return (
    <h3>
      <span>
        <Link to={'/articles'}>Розділи</Link>
      </span>
      {article && (
        <span>
          &#129042;
          <Link to={`/articles/${articleId}`}>{article.name}</Link>
        </span>
      )}
      {section && (
        <span>
          &#129042;
          <Link to={`/articles/${articleId}/${sectionId}`}>{section.name}</Link>
        </span>
      )}
      {theme && (
        <span>
          &#129042;
          <Link to={`/articles/${articleId}/${sectionId}/${themeId}`}>
            {theme.name}
          </Link>
        </span>
      )}
      {testId && (
        <span>
          &#129042;
          <Link to={`/articles/${articleId}/${sectionId}/${themeId}/${testId}`}>
            Тест
          </Link>
        </span>
      )}
      {isResults && (
        <span>
          &#129042;
          <Link to={`/articles/${articleId}/${sectionId}/${themeId}/results`}>
            Результати
          </Link>
        </span>
      )}
      {isTesting && (
        <span>
          &#129042;
          <Link
            to={`/articles/${articleId}/${sectionId}/${themeId}/results/test`}
          >
            Тестування
          </Link>
        </span>
      )}
      {resultId && (
        <span>
          &#129042;
          <Link
            to={`/articles/${articleId}/${sectionId}/${themeId}/results/${resultId}`}
          >
            Оцінка
          </Link>
        </span>
      )}
    </h3>
  );
}
