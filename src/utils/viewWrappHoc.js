import { Title } from '../components/Title';
import styles from '../components/Layout/Layout.module.css';

export default function viewWrappHoc(Component) {
  return function WrappedComponent(props) {
    return (
      <div className={styles.viewContainer}>
        <Title match={props.match} />
        <Component {...props} />
      </div>
    );
  };
}
