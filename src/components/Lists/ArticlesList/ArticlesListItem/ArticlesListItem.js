import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionsList } from '../../';

export default function ArticlesListItem({ item, pathname }) {
  const { _id, name } = item;
  const [showList, setShowList] = useState(false);
  const handleShow = () => setShowList(!showList);

  return (
    <li>
      <Link to={`${pathname}/${_id}`}>{name}</Link>
      <button type="button" onClick={handleShow} />
      {showList && (
        <SectionsList pathname={`${pathname}/${_id}`} article={item} />
      )}
    </li>
  );
}
