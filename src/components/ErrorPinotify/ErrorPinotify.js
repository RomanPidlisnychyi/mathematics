import React from 'react';
import styles from './ErrorPinotify.module.css';

export default function ErrorPinotify({ message }) {
  return <div className={styles.infoMessage}>{message}</div>;
}
