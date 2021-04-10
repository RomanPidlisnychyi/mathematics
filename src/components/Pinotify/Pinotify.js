import styles from './Pinotify.module.css';

export default function Pinotify({ err }) {
  return <div className={styles.container}>{err}</div>;
}
