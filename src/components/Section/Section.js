import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { TemesList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { getStatus } from '../../store/selectors/authSelectors';
import { getSectionById } from '../../store/selectors/sectionSelectors';
// import { onCreateSection } from '../../store/operations/sectionOperations';
// import { onGetSections } from '../../store/operations/sectionOperations';
import styles from './Section.module.css';

export default function Section({ match, location }) {
  const sectionId = match.params.id;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const status = useSelector(getStatus);
  const isAdmin = status === 'admin';
  const section = useSelector(state => getSectionById(state, sectionId));
  // useEffect(() => {
  //   if (sectionId) {
  //     dispatch(onGetSections(sectionId));
  //   }
  // }, [dispatch, sectionId]);

  const handleBtn = () => setIsModal(!isModal);
  const handleSubmit = () => {
    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      credantials = { ...credantials, [name]: value };
    });

    // dispatch(onCreateTeme({ ...credantials, sectionId })).then(response => {
    //   if (response) {
    //     setIsModal(false);
    //   }
    // });
  };
  return (
    <div className={styles.container}>
      <h3>{section && section.name}</h3>
      {/* <TemesList {...location} /> */}
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
