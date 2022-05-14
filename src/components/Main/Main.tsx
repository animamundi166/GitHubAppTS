import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './Main.module.scss';
import NoUserRepos from './Repositories/NoUserRepos/NoUserRepos';
import UserRepos from './Repositories/UserRepos/UserRepos';
import UserInfo from './UserInfo/UserInfo';

const Main: FC = () => {
  const { isWarningRepos, isLoadingRepos, repos } = useSelector((store: RootState) => store.userData);

  return (
    <main className={styles.main}>

      <UserInfo />
      {(isWarningRepos || (!isLoadingRepos && !repos.length)) ? <NoUserRepos /> : <UserRepos />}

    </main>
  );
};

export default Main;
