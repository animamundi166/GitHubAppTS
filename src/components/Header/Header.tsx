import { ChangeEvent, FC, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { getUser, getRepos, inputValue } from '../../store/userSlice';
import { ReactComponent as Logo } from '../icons/logo.svg';
import { ReactComponent as Magnifier } from '../icons/magnifier.svg';
import style from './Header.module.scss';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>('');
  const page = 1;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && userName !== '') {
      dispatch(inputValue(userName));
      dispatch(getUser(userName));
      dispatch(getRepos({ userName, page }));
      setUserName('');
    }
  };

  return (
    <header className={style.main}>
      <div className={style.logo}><Logo /></div>
      <label className={style.searchPanel}>
        <Magnifier className={style.magnifier} />
        <input
          type="text"
          placeholder="Enter GitHub Username"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={userName}
        />
      </label>
    </header>
  );
};

export default Header;
