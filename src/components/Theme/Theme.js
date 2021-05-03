import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TestsList } from '../Lists';
import { SimpleTest } from '../SimpleTest';
import { MyModal } from '../Modal';
import { Title } from '../Title';
import { ButtonAdd, ButtonDelete } from '../Buttons';
import { getIsAdmin } from '../../store/selectors/authSelectors';
import { getTest } from '../../store/selectors/testSelectors';
import { onCreateTest } from '../../store/operations/testOperations';
import { cleanTestState } from '../../store/actions/testActions';
import styles from './Theme.module.css';

export default function Theme({ match, location }) {
  const themeId = match.params.themeId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const test = useSelector(getTest);
  const isAdmin = useSelector(getIsAdmin);

  const handleBtn = () => {
    if (isModal) {
      dispatch(cleanTestState());
    }
    setIsModal(!isModal);
  };

  const handleDelBtn = () => console.log('delete theme');

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
      {isAdmin && <TestsList {...location} themeId={themeId} />}
      {isModal ? (
        <MyModal
          title={'Test'}
          handleSubmit={handleSubmit}
          handleModal={handleBtn}
        >
          <SimpleTest />
        </MyModal>
      ) : (
        <>
          <ButtonAdd title="тест" handleBtn={handleBtn} />
          <ButtonDelete title="тему" handleDelBtn={handleDelBtn} />
        </>
      )}
      <Link to={`${location.pathname}/results`}>тести</Link>
    </div>
  );
}
