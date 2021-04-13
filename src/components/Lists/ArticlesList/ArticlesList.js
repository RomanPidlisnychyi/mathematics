import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticles } from '../../../store/selectors/articleSelectors';

export default function ArticlesList() {
  const articles = useSelector(getArticles);
  return (
    articles && (
      <ul>
        {articles.map(({ _id, name }) => (
          <li key={_id}>
            <Link to={`/articles/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    )
  );
}
