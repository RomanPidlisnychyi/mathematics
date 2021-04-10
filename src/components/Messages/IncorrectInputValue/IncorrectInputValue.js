import styles from './IncorrectInputValue.module.css';

export default function IncorrectInputValue({ title }) {
  return <span className={styles.span}>{title}</span>;
}
