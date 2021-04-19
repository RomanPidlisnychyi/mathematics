import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TemesList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { Title } from '../Title';
import { getStatus } from '../../store/selectors/authSelectors';
import { getSectionById } from '../../store/selectors/sectionSelectors';
import { onGetSections } from '../../store/operations/sectionOperations';
import { onCreateTheme } from '../../store/operations/themeOperations';
import styles from './Section.module.css';

export default function Section({ match, location }) {
  const articleId = match.params.articleId;
  const sectionId = match.params.sectionId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const status = useSelector(getStatus);
  const isAdmin = status === 'admin';
  const section = useSelector(state => getSectionById(state, sectionId));

  useEffect(() => {
    if (!section) {
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

    dispatch(onCreateTheme({ ...credantials, sectionId })).then(response => {
      if (response) {
        setIsModal(false);
      }
    });
  };
  return (
    <div className={styles.container}>
      {/* <h3>{section && section.name}</h3> */}
      <Title match={match} />
      <TemesList {...location} sectionId={sectionId} />
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
