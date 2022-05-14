import { FC } from 'react';
import { ReactComponent as MagnifierImg } from '../../icons/magnifierBig.svg';
import styles from './EmptyPage.module.scss';

const StartPage:FC = () => (
  <div className={styles.container}>
    <MagnifierImg className={styles.magnifierImg} />
    <p className={styles.title}>Start with searching a GitHub user</p>
  </div>
);

export default StartPage;
