import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TemesList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { getStatus } from '../../store/selectors/authSelectors';
import { getSectionsByArticleId } from '../../store/selectors/sectionSelectors';
import { getThemeById } from '../../store/selectors/themeSelectors';
import { onGetSections } from '../../store/operations/sectionOperations';
import { onCreateTheme } from '../../store/operations/themeOperations';
import styles from './Theme.module.css';

export default function Theme({ match, location }) {
  const articleId = match.params.articleId;
  const themeId = match.params.themeId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const status = useSelector(getStatus);
  const isAdmin = status === 'admin';
  const sections = useSelector(state =>
    getSectionsByArticleId(state, articleId)
  );
  const theme = useSelector(state => getThemeById(state, themeId));

  useEffect(() => {
    if (sections && !sections.length) {
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
      <h3>{theme && theme.name}</h3>
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
