import styles from './Pinotify.module.css';

export default function Pinotify({ message }) {
  return <div className={styles.container}>{message}</div>;
}
