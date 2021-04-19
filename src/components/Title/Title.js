import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticleById } from '../../store/selectors/articleSelectors';
import { getSectionById } from '../../store/selectors/sectionSelectors';
import { getThemeById } from '../../store/selectors/themeSelectors';

export default function Title({ match }) {
  const articleId = match.params.articleId;
  const sectionId = match.params.sectionId;
  const themeId = match.params.themeId;

  const article = useSelector(state => getArticleById(state, articleId));
  const section = useSelector(state => getSectionById(state, sectionId));
  const theme = useSelector(state => getThemeById(state, themeId));

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
