import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSections } from '../../../store/selectors/sectionSelectors';

export default function SectionsList() {
  const sections = useSelector(getSections);
  return (
    <ul>
      {sections.map(({ _id, name }) => (
        <li key={_id}>
          <Link to={`/articles/${name}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
