import styles from './ButtonSlider.module.css';

export default function ButtonSlider({ isShow, handleShow }) {
  return (
    <button
      className={isShow ? `${styles.btn} ${styles.active}` : styles.btn}
      type="button"
      onClick={handleShow}
    />
  );
}
