import { useSelector } from 'react-redux';
import { getIsAdmin } from '../../../store/selectors/authSelectors';

export default function ButtonAdd({ title, handleBtn }) {
  const isAdmin = useSelector(getIsAdmin);
  return isAdmin ? (
    <button type="button" onClick={handleBtn}>
      Додати {title}
    </button>
  ) : null;
}
