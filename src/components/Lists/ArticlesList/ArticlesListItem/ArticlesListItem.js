import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionsList } from '../../';

export default function ArticlesListItem({ item: { _id, name }, pathname }) {
  const [showList, setShowList] = useState(false);
  const handleShow = () => setShowList(!showList);

  return (
    <li>
      <Link to={`${pathname}/${_id}`}>{name}</Link>
      <button type="button" onClick={handleShow} />
      {showList && (
        <SectionsList pathname={`${pathname}/${_id}`} articleId={_id} />
      )}
    </li>
  );
}
