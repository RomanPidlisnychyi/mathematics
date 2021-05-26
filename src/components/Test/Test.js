import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonUpdate, ButtonDelete } from '../Buttons';
import { UpdateTestForm } from '../Forms';
import { MyModal } from '../Modal';
import { onDeleteTest } from '../../store/operations/testOperations';
import { getTestById } from '../../store/selectors/testSelectors';
import viewWrappHoc from '../../utils/viewWrappHoc';
import Button from '@material-ui/core/Button';

function Test({ match }) {
  const { testId } = match.params;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(null);

  const test = useSelector(state => getTestById(state, testId));
  const handleBtn = e => {
    const value = e && e.target && e.target.value;

    if (value) {
      setIsModal(value);
      return;
    }

    setIsModal(null);
  };

  const handleDelBtn = () => {
    dispatch(onDeleteTest(testId));
    setIsModal(null);
  };

  return (
    <div>
      {test && (
        <Button variant="contained" color="primary">
          {test._id}
        </Button>
      )}
      {isModal ? (
        isModal === 'update' ? (
          <MyModal
            isModal={isModal}
            title={'Змінити?'}
            handleSubmit={() => {}}
            handleModal={handleBtn}
          >
            <UpdateTestForm />
          </MyModal>
        ) : (
          <MyModal
            title={'Видалити тест?'}
            handleSubmit={handleDelBtn}
            handleModal={handleBtn}
          />
        )
      ) : (
        <>
          <ButtonUpdate title="тест" handleBtn={handleBtn} />
          <ButtonDelete title="тест" handleDelBtn={handleBtn} />
        </>
      )}
    </div>
  );
}

export default viewWrappHoc(Test);
