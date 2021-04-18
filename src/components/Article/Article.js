import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SectionsList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { getStatus } from '../../store/selectors/authSelectors';
import { getArticleById } from '../../store/selectors/articleSelectors';
import { onCreateSection } from '../../store/operations/sectionOperations';
import styles from './Article.module.css';

export default function Article({ match, location }) {
  const articleId = match.params.id;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const status = useSelector(getStatus);
  const isAdmin = status === 'admin';
  const article = useSelector(state => getArticleById(state, articleId));

  const handleBtn = () => setIsModal(!isModal);

  const handleSubmit = () => {
    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      credantials = { ...credantials, [name]: value };
    });

    dispatch(onCreateSection({ ...credantials, articleId })).then(response => {
      if (response) {
        setIsModal(false);
      }
    });
  };
  return (
    <div className={styles.container}>
      <h3>{article && article.name}</h3>
      <SectionsList {...location} article={article} />
      {isAdmin &&
        (isModal ? (
          <MyModal
            title={'Section'}
            handleSubmit={handleSubmit}
            handleModal={handleBtn}
          >
            <CreateArticleSectionForm />
          </MyModal>
        ) : (
          <button type="button" onClick={handleBtn}>
            add section
          </button>
        ))}
    </div>
  );
}
