import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { onGetThemes } from '../../../store/operations/themeOperations';

export default function TemesList({ pathname, section }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (section && !section.themes) {
      dispatch(onGetThemes(section._id));
    }
  }, [dispatch, section]);

  return (
    <ul>
      {section &&
        section.themes &&
        section.themes.map(({ _id, name }) => (
          <li key={_id}>
            <Link to={`${pathname}/${_id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  );
}
