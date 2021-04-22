import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemesList } from '../..';
import styles from './SectionsListItem.module.css';

export default function ArticlesListItem({ item, pathname }) {
  const { _id, name } = item;
  const [showList, setShowList] = useState(false);
  const handleShow = () => setShowList(!showList);

  return (
    <li>
      <button className={styles.btn} type="button" onClick={handleShow} />
      <Link to={`${pathname}/${_id}`}>{name}</Link>
      {showList && (
        <ThemesList pathname={`${pathname}/${_id}`} sectionId={_id} />
      )}
    </li>
  );
}
