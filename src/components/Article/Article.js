import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SectionsList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { ButtonDelete, ButtonAdd } from '../Buttons';
import { onCreateSection } from '../../store/operations/sectionOperations';
import { onDeleteArticle } from '../../store/operations/articleOperations';
import viewWrappHoc from '../../utils/viewWrappHoc';
import { preperingCredentials } from '../../utils/preperingCredentials';
import styles from './Article.module.css';

function Article({ match, location }) {
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
    const allInputs = document.querySelectorAll('input');

    const credantials = preperingCredentials([...allInputs]);

    dispatch(onCreateSection({ ...credantials, articleId }));
    setIsModal(null);
  };
  return (
    <div className={styles.container}>
      <SectionsList {...location} articleId={articleId} />
      {isModal ? (
        isModal === 'create' ? (
          <MyModal
            isModal={isModal}
            title={'Нова секція'}
            handleSubmit={handleSubmit}
            handleModal={handleBtn}
          >
            <CreateArticleSectionForm />
          </MyModal>
        ) : (
          <MyModal
            title={'Видалити розділ?'}
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

export default viewWrappHoc(Article);
