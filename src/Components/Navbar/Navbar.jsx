import { Link, useLocation } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <ul className={style.navbar}>
      {location.pathname !== '/' && (
        <li>
          <Link to=''>
            <img src='/src/assets/Icons/house-line.svg' alt='Home page img' />
            <p>Home</p>
          </Link>
        </li>
      )}
      {location.pathname !== '/game' && (
        <li hidden={false}>
          <Link to='/game'>
            <img
              src='/src/assets/Icons/game-controller.svg'
              alt='Game page img'
            />
            <p>Game</p>
          </Link>
        </li>
      )}
      {location.pathname !== '/info' && (
        <li hidden={false}>
          <Link to='/info'>
            <img src='/src/assets/Icons/question.svg' alt='Info page img' />
            <p>Info</p>
          </Link>
        </li>
      )}
      {location.pathname !== '/about' && (
        <li hidden={false}>
          <Link className={style.links} to='/about'>
            <img src='/src/assets/Icons/info.svg' alt='About us page img' />
            <p>About us</p>
          </Link>
        </li>
      )}
    </ul>
  );
};
export default Navbar;
