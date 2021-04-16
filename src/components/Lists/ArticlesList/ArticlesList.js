import { useSelector } from 'react-redux';
import { getArticles } from '../../../store/selectors/articleSelectors';
import { ArticlesListItem } from './ArticlesListItem';

export default function ArticlesList({ pathname = '/articles' }) {
  const articles = useSelector(getArticles);
  return (
    articles && (
      <ul>
        {articles.map(item => (
          <ArticlesListItem key={item._id} item={item} pathname={pathname} />
        ))}
      </ul>
    )
  );
}
