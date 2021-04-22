import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemesList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { Title } from '../Title';
import { getStatus } from '../../store/selectors/authSelectors';
import { onCreateTheme } from '../../store/operations/themeOperations';
import styles from './Section.module.css';

export default function Section({ match, location }) {
  const sectionId = match.params.sectionId;
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
      {isAdmin &&
        (isModal ? (
          <MyModal
            title={'Teme'}
            handleSubmit={handleSubmit}
            handleModal={handleBtn}
          >
            <CreateArticleSectionForm />
          </MyModal>
        ) : (
          <button type="button" onClick={handleBtn}>
            add theme
          </button>
        ))}
    </div>
  );
}
