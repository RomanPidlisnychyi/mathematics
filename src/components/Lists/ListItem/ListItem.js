import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionsList, ThemesList } from '../..';
import styles from './SectionsListItem.module.css';

export default function ListItem({ item, pathname, articleId, sectionId }) {
  const { _id, name } = item;
  const [showList, setShowList] = useState(false);
  const handleShow = () => setShowList(!showList);

  return (
    <li>
      <button className={styles.btn} type="button" onClick={handleShow} />
      <Link to={`${pathname}/${_id}`}>{name}</Link>
      {showList && (
        <>
          {articleId && (
            <SectionsList pathname={`${pathname}/${_id}`} articleId={_id} />
          )}
          {sectionId && (
            <ThemesList pathname={`${pathname}/${_id}`} sectionId={_id} />
          )}
        </>
      )}
    </li>
  );
}
