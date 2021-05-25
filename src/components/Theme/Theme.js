import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TestsList } from '../Lists';
import { SimpleTest } from '../SimpleTest';
import { MyModal } from '../Modal';
import { ButtonAdd, ButtonDelete } from '../Buttons';
import { getIsAdmin } from '../../store/selectors/authSelectors';
import { getTest } from '../../store/selectors/testSelectors';
import { onCreateTest } from '../../store/operations/testOperations';
import { onDeleteTheme } from '../../store/operations/themeOperations';
import { cleanTestState } from '../../store/actions/testActions';
import viewWrappHoc from '../../utils/viewWrappHoc';
import styles from './Theme.module.css';

function Theme({ match, location }) {
  const themeId = match.params.themeId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const test = useSelector(getTest);
  const isAdmin = useSelector(getIsAdmin);

  const handleBtn = e => {
    const value = e && e.target && e.target.value;

    if (value) {
      setIsModal(value);
      dispatch(cleanTestState());
      return;
    }

    setIsModal(null);
  };

  const handleDelBtn = () => {
    dispatch(onDeleteTheme(themeId));
    setIsModal(null);
  };

  const handleSubmit = () => {
    dispatch(onCreateTest({ test, themeId }));

    setIsModal(false);
    dispatch(cleanTestState());
  };
  return (
    <div className={styles.container}>
      {isAdmin && <TestsList {...location} themeId={themeId} />}
      {isModal ? (
        isModal === 'create' ? (
          <MyModal
            title={'Test'}
            handleSubmit={handleSubmit}
            handleModal={handleBtn}
          >
            <SimpleTest />
          </MyModal>
        ) : (
          <MyModal
            title={'Видалити тему?'}
            handleSubmit={handleDelBtn}
            handleModal={handleBtn}
          />
        )
      ) : (
        <>
          <ButtonAdd title="тест" handleBtn={handleBtn} />
          <ButtonDelete title="тему" handleDelBtn={handleBtn} />
        </>
      )}
      <Link to={`${location.pathname}/results`}>тести</Link>
    </div>
  );
}

export default viewWrappHoc(Theme);
