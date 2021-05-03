import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { TestsList } from '../Lists';
import { SimpleTest } from '../SimpleTest';
import { MyModal } from '../Modal';
import { Title } from '../Title';
import { getStatus } from '../../store/selectors/authSelectors';
import { getTest } from '../../store/selectors/testSelectors';
import { onCreateTest } from '../../store/operations/testOperations';
import { cleanTestState } from '../../store/actions/testActions';
import styles from './Theme.module.css';

export default function Theme({ match, location }) {
  const themeId = match.params.themeId;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const status = useSelector(getStatus);
  const test = useSelector(getTest);
  const isAdmin = status === 'admin';

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
      {isAdmin && <TestsList {...location} themeId={themeId} />}
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
      <Link to={`${location.pathname}/results`}>тести</Link>
      {/* <Link to={`${location.pathname}/test`}>Пройти тест</Link> */}
    </div>
  );
}
