import { FC } from 'react';
import { ReactComponent as FollowersImg } from '../../icons/followers.svg';
import { ReactComponent as FollowingImg } from '../../icons/following.svg';
import valueFormat from '../../../utils/formatValue';
import styles from './UserInfo.module.scss';
import { RootState } from '../../../store/store';
import { useAppSelector } from '../../../store/hooks';

const UserInfo: FC = () => {
  const { user } = useAppSelector((store: RootState) => store.userData);

  return (
    <div className={styles.userInfoContainer}>
      <img
        className={styles.userAvatar}
        src={user!.avatar_url}
        alt={`${user!.login} avatar`}
      />

      <div className={styles.userInfo}>
        <p className={styles.userName}>{user!.name}</p>
        <p className={styles.userLogin}>
          <a href={user!.html_url} target="_blank" rel="noopener noreferrer">
            {user!.login}
          </a>
        </p>

        <div className={styles.userFollowInfo}>

          <span className={styles.userFollow}>
            <FollowersImg className={styles.userFollowImg} />
            {valueFormat(user!.followers)}
            {' '}
            followers
          </span>

          <span className={styles.userFollow}>
            <FollowingImg className={styles.userFollowImg} />
            {valueFormat(user!.following)}
            {' '}
            following
          </span>

        </div>
      </div>

    </div>
  );
};

export default UserInfo;
