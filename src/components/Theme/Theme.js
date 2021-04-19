import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TestsList } from '../Lists';
import { SimpleTest } from '../SimpleTest';
import { MyModal } from '../Modal';
import { Title } from '../Title';
import { getStatus } from '../../store/selectors/authSelectors';
import { getThemeById } from '../../store/selectors/themeSelectors';
import { getTest } from '../../store/selectors/testSelectors';
import { onGetSections } from '../../store/operations/sectionOperations';
import { onGetThemes } from '../../store/operations/themeOperations';
import { onCreateTest } from '../../store/operations/testOperations';
import { cleanTestState } from '../../store/actions/testActions';
import styles from './Theme.module.css';

export default function Theme({ match, location }) {
  const articleId = match.params.articleId;
  const sectionId = match.params.sectionId;
  const themeId = match.params.themeId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const status = useSelector(getStatus);
  const test = useSelector(getTest);
  const isAdmin = status === 'admin';
  const theme = useSelector(state => getThemeById(state, themeId));

  useEffect(() => {
    if (!theme) {
      dispatch(onGetSections(articleId));
      dispatch(onGetThemes(sectionId));
    }
  }, [dispatch, articleId, sectionId, theme]);

  const handleBtn = () => {
    if (isModal) {
      dispatch(cleanTestState());
    }
    setIsModal(!isModal);
  };

  const handleSubmit = () => {
    dispatch(onCreateTest({ test, themeId })).then(response => {
      if (response) {
        setIsModal(false);
        dispatch(cleanTestState());
      }
    });
  };
  return (
    <div className={styles.container}>
      <Title match={match} />
      <TestsList {...location} themeId={themeId} />
      {isAdmin &&
        (isModal ? (
          <MyModal
            title={'Test'}
            handleSubmit={handleSubmit}
            handleModal={handleBtn}
          >
            <SimpleTest />
          </MyModal>
        ) : (
          <button type="button" onClick={handleBtn}>
            add test
          </button>
        ))}
    </div>
  );
}
