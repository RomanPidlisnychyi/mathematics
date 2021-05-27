import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ArticlesList } from '../Lists';
import { MyModal } from '../Modal';
import { CreateArticleSectionForm } from '../Forms';
import { ButtonAdd } from '../Buttons';
import { getStatus } from '../../store/selectors/authSelectors';
import { onCreateArticle } from '../../store/operations/articleOperations';
import viewWrappHoc from '../../utils/viewWrappHoc';
import { preperingCredentials } from '../../utils/preperingCredentials';
import styles from './Article.module.css';

function Article({ location }) {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);

  const status = useSelector(getStatus);
  const isAdmin = status === 'admin';

  const handleBtn = () => setIsModal(!isModal);
  const handleSubmit = () => {
    const allInputs = document.querySelectorAll('input');

    const credantials = preperingCredentials([...allInputs]);

    dispatch(onCreateArticle(credantials)).then(response => {
      if (response) {
        setIsModal(false);
      }
    });
  };
  return (
    <div className={styles.container}>
      <ArticlesList {...location} />
      {isAdmin &&
        (isModal ? (
          <MyModal
            title={'Новий розділ'}
            handleSubmit={handleSubmit}
            handleModal={handleBtn}
          >
            <CreateArticleSectionForm />
          </MyModal>
        ) : (
          <ButtonAdd title="розділ" handleBtn={handleBtn} />
        ))}
    </div>
  );
}

export default viewWrappHoc(Article);
