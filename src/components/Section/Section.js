import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemesList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { Title } from '../Title';
import { ButtonAdd, ButtonDelete } from '../Buttons';
import { onCreateTheme } from '../../store/operations/themeOperations';
import styles from './Section.module.css';

export default function Section({ match, location }) {
  const sectionId = match.params.sectionId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const handleBtn = () => setIsModal(!isModal);
  const handleDelBtn = () => console.log('delete section');
  const handleSubmit = () => {
    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      credantials = { ...credantials, [name]: value };
    });

    dispatch(onCreateTheme({ ...credantials, sectionId })).then(response => {
      if (response) {
        setIsModal(false);
      }
    });
  };
  return (
    <div className={styles.container}>
      <Title match={match} />
      <ThemesList {...location} sectionId={sectionId} />
      {isModal ? (
        <MyModal
          title={'Teme'}
          handleSubmit={handleSubmit}
          handleModal={handleBtn}
        >
          <CreateArticleSectionForm />
        </MyModal>
      ) : (
        <>
          <ButtonAdd title="тему" handleBtn={handleBtn} />
          <ButtonDelete title="секцію" handleDelBtn={handleDelBtn} />
        </>
      )}
    </div>
  );
}
