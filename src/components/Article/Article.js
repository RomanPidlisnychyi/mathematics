import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SectionsList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { Title } from '../Title';
import { ButtonDelete, ButtonAdd } from '../Buttons';
import { onCreateSection } from '../../store/operations/sectionOperations';
import styles from './Article.module.css';

export default function Article({ match, location }) {
  const articleId = match.params.articleId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const handleBtn = () => setIsModal(!isModal);
  const handleDelBtn = () => console.log('delete article');
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
      <Title match={match} />
      <SectionsList {...location} articleId={articleId} />
      {isModal ? (
        <MyModal
          isModal={isModal}
          title={'Section'}
          handleSubmit={handleSubmit}
          handleModal={handleBtn}
        >
          <CreateArticleSectionForm />
        </MyModal>
      ) : (
        <>
          <ButtonAdd title="секцію" handleBtn={handleBtn} />
          <ButtonDelete title="розділ" handleDelBtn={handleDelBtn} />
        </>
      )}
    </div>
  );
}
