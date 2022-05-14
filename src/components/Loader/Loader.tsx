import { FC } from 'react';
import { ReactComponent as Spinner } from '../icons/loading.svg';
import styles from './Loader.module.scss';

const Loader:FC = () => (
  <Spinner className={styles.loader} />
);

export default Loader;
