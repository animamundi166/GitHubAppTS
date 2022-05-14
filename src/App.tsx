import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import StartPage from './components/Main/EmptyPages/StartPage';
import NoUser from './components/Main/EmptyPages/NoUser';
import Main from './components/Main/Main';
import { useAppSelector } from './store/hooks';
import { RootState } from './store/store';

const App = () => {
  const { isWarningUser } = useAppSelector((store: RootState) => store.userData);
  const { isLoadingUser } = useAppSelector((store: RootState) => store.userData);
  const { user } = useAppSelector((store: RootState) => store.userData);

  return (
    <>
      <Header />
      {isLoadingUser && <Loader />}
      {!user && !isWarningUser && !isLoadingUser && <StartPage />}
      {isWarningUser && <NoUser />}
      {user && <Main />}
    </>
  );
};

export default App;
