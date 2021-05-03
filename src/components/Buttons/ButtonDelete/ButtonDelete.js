import { useSelector } from 'react-redux';
import { getIsAdmin } from '../../../store/selectors/authSelectors';

export default function ButtonDelete({ title, handleDelBtn }) {
  const isAdmin = useSelector(getIsAdmin);
  return isAdmin ? (
    <button type="button" onClick={handleDelBtn}>
      Видалити {title}
    </button>
  ) : null;
}
