import { FC } from 'react';
import { ReactComponent as NoReposImg } from '../../../icons/noRepos.svg';
import styles from './NoUserRepos.module.scss';

const NoUserRepos:FC = () => (
  <div className={styles.container}>
    <NoReposImg />
    <p className={styles.title}>Repository list is empty</p>
  </div>
);

export default NoUserRepos;
