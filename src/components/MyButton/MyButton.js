import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { isLoading } from '../../store/selectors/loadingSelectots';
import styles from './MyButton.module.css';

export default function MyButton({ title, btnActive }) {
  const loading = useSelector(isLoading);
  return (
    <Button
      className={styles.button}
      variant="outline-primary"
      type="submit"
      disabled={!btnActive || loading}
    >
      {!loading ? title : <Loader color="#007bff" height={24} width={45} />}
    </Button>
  );
}
