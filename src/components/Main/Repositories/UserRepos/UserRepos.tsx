import ReactPaginate from 'react-paginate';
import { FC, useState } from 'react';
import { ReactComponent as Arrow } from '../../../icons/arrow.svg';
import styles from './UserRepos.module.scss';
import pag from './Pagination.module.scss';
import RepoItem from '../RepoItem/RepoItem';
import { PER_PAGE } from '../../../../constants/constants';
import { getRepos } from '../../../../store/userSlice';
import Loader from '../../../Loader/Loader';
import { RootState } from '../../../../store/store';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

const UserRepos: FC = () => {
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector((store: RootState) => store.userData);
  const { user } = useAppSelector((store: RootState) => store.userData);
  const { isLoadingRepos } = useAppSelector((store: RootState) => store.userData);
  const { repos } = useAppSelector((store: RootState) => store.userData);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageCount = Math.ceil(user!.public_repos / PER_PAGE);

  const handlePageClick = ({ selected }: { selected: number }): void => {
    setCurrentPage(selected);
    const page = selected + 1;
    dispatch(getRepos({ userName, page }));
  };

  return (

    <div className={styles.reposContainer}>
      <p className={styles.reposTitle}>
        Repositories (
        {user!.public_repos}
        )
      </p>
      <div className={styles.reposList}>
        {isLoadingRepos
          ? <Loader />
          : repos.map((repo) => (
            <RepoItem
              key={repo.id}
              name={repo.name}
              description={repo.description}
              url={repo.html_url}
            />
          ))}
      </div>

      {user!.public_repos > 4
        && (
          <div className={pag.paginationContainer}>
            <span className={pag.paginationInfo}>
              {((currentPage + 1) * 4) - 3}
              -
              {user!.public_repos < 4 ? user!.public_repos : (currentPage + 1) * 4}
              {' '}
              of
              {' '}
              {user!.public_repos}
              {' '}
              items
            </span>

            <ReactPaginate
              previousLabel={<Arrow />}
              nextLabel={<Arrow className={pag.arrow} />}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={pag.pagination}
              pageClassName={pag.everyLiOnPage}
              activeClassName={pag.activeLink}
              disabledLinkClassName={pag.disabledArrows}
              disabledClassName={pag.disabledArrows}
            />
          </div>
        )}
    </div>
  );
};

export default UserRepos;
