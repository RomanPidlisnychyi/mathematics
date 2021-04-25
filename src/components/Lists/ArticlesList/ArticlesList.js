import { useSelector } from 'react-redux';
import { getArticles } from '../../../store/selectors/articleSelectors';
import ArticlesListItem from './ArticlesListItem/ArticlesListItem';
import styles from './ArticlesList.module.css';

export default function ArticlesList({ pathname = '/articles' }) {
  const articles = useSelector(getArticles);
  return (
    articles && (
      <ul className={styles.list}>
        {articles.map(item => (
          <ArticlesListItem key={item._id} item={item} pathname={pathname} />
        ))}
      </ul>
    )
  );
}
