import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonUpdate, ButtonDelete } from '../Buttons';
import { UpdateTestForm } from '../Forms';
import { MyModal } from '../Modal';
import { onDeleteTest } from '../../store/operations/testOperations';
import viewWrappHoc from '../../utils/viewWrappHoc';

function Test({ match }) {
  const { testId } = match.params;
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(null);

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
      {testId}
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
