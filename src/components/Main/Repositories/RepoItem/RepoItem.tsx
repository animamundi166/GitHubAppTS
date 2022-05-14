import { FC } from 'react';
import styles from './RepoItem.module.scss';

interface IDataProps {
  name: string,
  description: string,
  url: string,
}

const RepoItem: FC<IDataProps> = ({ name, description, url }) => (
  <div className={styles.repoCard}>
    <p className={styles.repoCardName}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </p>
    <p className={styles.repoCardDescription}>{description}</p>
  </div>
);

export default RepoItem;
