import { useSelector } from 'react-redux';
import { getIsAdmin } from '../../../store/selectors/authSelectors';

export default function ButtonUpdate({ title, handleBtn }) {
  const isAdmin = useSelector(getIsAdmin);
  return isAdmin ? (
    <button type="button" value="update" onClick={handleBtn}>
      Оновити {title}
    </button>
  ) : null;
}
