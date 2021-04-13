import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArticlesList } from '../Lists/ArticlesList';
import { MyModal } from '../Modal';
import { CreateArticleForm } from '../Forms';
import { getStatus } from '../../store/selectors/authSelectors';
import { onCreateArticle } from '../../store/operations/articleOperations';
import styles from './Article.module.css';

export default function Article() {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const status = useSelector(getStatus);
  const isAdmin = status === 'admin';

  const handleBtn = () => setIsModal(!isModal);
  const handleSubmit = () => {
    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      credantials = { ...credantials, [name]: value };
    });

    dispatch(onCreateArticle(credantials)).then(response => {
      if (response) {
        setIsModal(false);
      }
    });
  };
  return (
    <div className={styles.container}>
      <h3>Articles</h3>
      <ArticlesList />
      {isAdmin &&
        (isModal ? (
          <MyModal
            title={'Article'}
            handleSubmit={handleSubmit}
            handleModal={handleBtn}
          >
            <CreateArticleForm />
          </MyModal>
        ) : (
          <button type="button" onClick={handleBtn}>
            add article
          </button>
        ))}
    </div>
  );
}
