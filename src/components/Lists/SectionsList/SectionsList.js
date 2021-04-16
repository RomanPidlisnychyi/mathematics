import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { onGetSections } from '../../../store/operations/sectionOperations';
// import { getSections } from '../../../store/selectors/sectionSelectors';

export default function SectionsList({ pathname, articleId }) {
  const dispatch = useDispatch();
  const [sections, setSections] = useState(null);

  // const sections = useSelector(getSections);
  useEffect(() => {
    if (articleId) {
      dispatch(onGetSections(articleId)).then(response =>
        setSections(response)
      );
    }
  }, [dispatch, articleId]);

  return (
    <ul>
      {sections &&
        sections.map(({ _id, name }) => (
          <li key={_id}>
            <Link to={`${pathname}/${_id}`}>{name}</Link>
          </li>
        ))}
    </ul>
  );
}
