import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Loader from 'react-loader-spinner';
import { Logo } from '../Logo';
import { UserMenu } from '../UserMenu';
import { Pinotify } from '../Pinotify';
import { getName, getMessage } from '../../store/selectors/authSelectors';
import { isLoading } from '../../store/selectors/loadingSelectots';
import { token } from '../../utils/apiUtils';
import styles from './Header.module.css';
import fade from '../Pinotify/Pinotify.module.css';

export default function Header() {
  const name = useSelector(getName);
  const loading = useSelector(isLoading);
  const isToken = token.getLocalTokens();
  const message = useSelector(getMessage);

  return (
    <header className={styles.header}>
      <Logo />
      {loading && isToken && !name && (
        <Loader color="#79879a" height={24} width={45} />
      )}
      <UserMenu name={name} isToken={isToken} />
      <CSSTransition
        in={!!message}
        classNames={fade}
        timeout={250}
        unmountOnExit
      >
        <Pinotify message={message} />
      </CSSTransition>
    </header>
  );
}
