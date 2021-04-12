import { Modal, Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { isLoading } from '../../store/selectors/loadingSelectots';

export default function MyModal({
  handleSubmit,
  handleModal,
  title,
  children,
}) {
  const loading = useSelector(isLoading);
  return (
    <>
      <Modal show={true} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {!loading ? 'Save' : <Loader color="#fff" height={24} width={45} />}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
