import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemesList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { ButtonAdd, ButtonDelete } from '../Buttons';
import { onCreateTheme } from '../../store/operations/themeOperations';
import { onDeleteSection } from '../../store/operations/sectionOperations';
import viewWrappHoc from '../../utils/viewWrappHoc';
import styles from './Section.module.css';

function Section({ match, location }) {
  const sectionId = match.params.sectionId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const handleBtn = e => {
    const value = e && e.target && e.target.value;

    if (value) {
      setIsModal(value);
      return;
    }

    setIsModal(null);
  };

  const handleDelBtn = () => {
    dispatch(onDeleteSection(sectionId));
    setIsModal(null);
  };

  const handleSubmit = () => {
    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      credantials = { ...credantials, [name]: value };
    });

    dispatch(onCreateTheme({ ...credantials, sectionId }));
    setIsModal(false);
  };
  return (
    <div className={styles.container}>
      <ThemesList {...location} sectionId={sectionId} />
      {isModal ? (
        isModal === 'create' ? (
          <MyModal
            title={'Нова тема'}
            handleSubmit={handleSubmit}
            handleModal={handleBtn}
          >
            <CreateArticleSectionForm />
          </MyModal>
        ) : (
          <MyModal
            title={'Видалити секцію?'}
            handleSubmit={handleDelBtn}
            handleModal={handleBtn}
          />
        )
      ) : (
        <>
          <ButtonAdd title="тему" handleBtn={handleBtn} />
          <ButtonDelete title="секцію" handleDelBtn={handleBtn} />
        </>
      )}
    </div>
  );
}

export default viewWrappHoc(Section);
