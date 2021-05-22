import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SectionsList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { Title } from '../Title';
import { ButtonDelete, ButtonAdd } from '../Buttons';
import { onCreateSection } from '../../store/operations/sectionOperations';
import { onDeleteArticle } from '../../store/operations/articleOperations';
import styles from './Article.module.css';

export default function Article({ match, location }) {
  const articleId = match.params.articleId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(null);

  const handleBtn = e => {
    const value = e && e.target && e.target.value;

    if (value) {
      setIsModal(value);
      return;
    }

    setIsModal(null);
  };

  const handleDelBtn = () => {
    dispatch(onDeleteArticle(articleId));
    setIsModal(null);
  };

  const handleSubmit = () => {
    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      credantials = { ...credantials, [name]: value };
    });

    dispatch(onCreateSection({ ...credantials, articleId }));
    setIsModal(null);
  };
  return (
    <div className={styles.container}>
      <Title match={match} />
      <SectionsList {...location} articleId={articleId} />
      {isModal ? (
        isModal === 'create' ? (
          <MyModal
            isModal={isModal}
            title={'Section'}
            handleSubmit={handleSubmit}
            handleModal={handleBtn}
          >
            <CreateArticleSectionForm />
          </MyModal>
        ) : (
          <MyModal
            isModal={isModal}
            title={'Видалити данний розділ?'}
            handleSubmit={handleDelBtn}
            handleModal={handleBtn}
          />
        )
      ) : (
        <>
          <ButtonAdd title="секцію" handleBtn={handleBtn} />
          <ButtonDelete title="розділ" handleDelBtn={handleBtn} />
        </>
      )}
    </div>
  );
}
