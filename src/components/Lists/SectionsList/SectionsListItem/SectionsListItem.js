import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemesList } from '../..';
import { ButtonSlider } from '../../../Buttons';

export default function ArticlesListItem({ item, pathname }) {
  const { _id, name } = item;
  const [showList, setShowList] = useState(false);
  const handleShow = () => setShowList(!showList);

  return (
    <li>
      <ButtonSlider handleShow={handleShow} />
      <Link to={`${pathname}/${_id}`}>{name}</Link>
      {showList && (
        <ThemesList pathname={`${pathname}/${_id}`} sectionId={_id} />
      )}
    </li>
  );
}
