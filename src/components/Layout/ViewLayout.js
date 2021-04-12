import styles from './Layout.module.css';

export default function ViewLayout({ children }) {
  return <div className={styles.viewContainer}>{children}</div>;
}
