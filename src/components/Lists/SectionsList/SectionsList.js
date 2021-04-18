import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSectionsByArticleId } from '../../../store/selectors/sectionSelectors';
import { onGetSections } from '../../../store/operations/sectionOperations';

export default function SectionsList({ pathname, articleId }) {
  const dispatch = useDispatch();

  const sections = useSelector(state =>
    getSectionsByArticleId(state, articleId)
  );
  useEffect(() => {
    if (sections && !sections.length) {
      dispatch(onGetSections(articleId));
    }
  }, [dispatch, articleId]);

  return (
    <ul>
      {sections &&
        sections.length > 0 &&
        sections.map(({ _id, name }) => (
          <li key={_id}>
            <Link to={`${pathname}/${_id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  );
}
