import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { TemesList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { getStatus } from '../../store/selectors/authSelectors';
import { getArticleById } from '../../store/selectors/articleSelectors';
import { onCreateSection } from '../../store/operations/sectionOperations';
import { onGetSections } from '../../store/operations/sectionOperations';
import styles from './Section.module.css';

export default function Section({ match, location }) {
  const articleId = match.params.id;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const status = useSelector(getStatus);
  const isAdmin = status === 'admin';
  const article = useSelector(state => getArticleById(state, articleId));
  useEffect(() => {
    if (articleId) {
      dispatch(onGetSections(articleId));
    }
  }, [dispatch, articleId]);

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
      {/* <TemesList {...location} /> */}
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
