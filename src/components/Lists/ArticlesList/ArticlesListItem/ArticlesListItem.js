import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionsList } from '../../';
import styles from './ArticlesListItem.module.css';

export default function ArticlesListItem({ item, pathname }) {
  const { _id, name } = item;
  const [showList, setShowList] = useState(false);
  const handleShow = () => setShowList(!showList);

  return (
    <li>
      <button className={styles.btn} type="button" onClick={handleShow} />
      <Link to={`${pathname}/${_id}`}>{name}</Link>
      {showList && (
        <SectionsList pathname={`${pathname}/${_id}`} articleId={_id} />
      )}
    </li>
  );
}
