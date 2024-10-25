import { useLocation } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  let location = useLocation();

  return (
    <>
      {location.pathname !== '/' && (
        <header className={style.header}>
          <h1>Greenier, Please</h1>
        </header>
      )}
    </>
  );
};
export default Header;
