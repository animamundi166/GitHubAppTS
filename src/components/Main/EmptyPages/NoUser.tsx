import { FC } from 'react';
import { ReactComponent as NotFoundImg } from '../../icons/noUser.svg';
import styles from './EmptyPage.module.scss';

const NoUser:FC = () => (
  <div className={styles.container}>
    <NotFoundImg className={styles.noUserImg} />
    <p className={styles.title}>User not found</p>
  </div>
);

export default NoUser;
