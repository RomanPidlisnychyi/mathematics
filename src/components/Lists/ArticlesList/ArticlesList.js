import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticles } from '../../../store/selectors/articleSelectors';

export default function ArticlesList({ pathname }) {
  const articles = useSelector(getArticles);
  return (
    articles && (
      <ul>
        {articles.map(({ _id, name }) => (
          <li key={_id}>
            <Link to={`${pathname}/${_id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    )
  );
}
