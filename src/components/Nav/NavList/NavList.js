import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticles } from '../../../store/selectors/articleSelectors';

export default function NavList() {
  const articles = useSelector(getArticles);
  return (
    <>
      <Link to="/articles">Articles</Link>
      {articles && (
        <ul>
          {articles.map(({ _id, name }) => (
            <li key={_id}>{name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
