import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionsList } from '../../';
import { ButtonSlider } from '../../../Buttons';

export default function ArticlesListItem({ item, pathname }) {
  const { _id, name } = item;
  const [showList, setShowList] = useState(false);
  const handleShow = () => setShowList(!showList);

  return (
    <li>
      <ButtonSlider isShow={showList} handleShow={handleShow} />
      <Link to={`${pathname}/${_id}`}>{name}</Link>
      {showList && (
        <SectionsList pathname={`${pathname}/${_id}`} articleId={_id} />
      )}
    </li>
  );
}
