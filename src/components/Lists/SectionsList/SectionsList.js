import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { onGetSections } from '../../../store/operations/sectionOperations';

export default function SectionsList({ pathname, article }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (article && !article.sections) {
      dispatch(onGetSections(article._id));
    }
  }, [dispatch, article]);

  return (
    <ul>
      {article &&
        article.sections &&
        article.sections.map(({ _id, name }) => (
          <li key={_id}>
            <Link to={`${pathname}/${_id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  );
}
