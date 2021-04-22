import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getThemesBySectionId } from '../../../store/selectors/themeSelectors';
import { onGetThemes } from '../../../store/operations/themeOperations';

export default function TemesList({ pathname, sectionId }) {
  const dispatch = useDispatch();
  const themes = useSelector(state => getThemesBySectionId(state, sectionId));
  useEffect(() => {
    if (themes && !themes.length) {
      dispatch(onGetThemes(sectionId));
    }
  }, [dispatch, sectionId]);

  return (
    <ul>
      {themes &&
        themes.length > 0 &&
        themes.map(({ _id, name }) => (
          <li key={_id}>
            <Link to={`${pathname}/${_id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  );
}
