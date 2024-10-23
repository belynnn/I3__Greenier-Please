import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <ul>
      {location.pathname !== '/' && (
        <li>
          <Link to=''>
            <img src='' alt='Home page img' />
            <p>Home</p>
          </Link>
        </li>
      )}
      {location.pathname !== '/game' && (
        <li hidden={false}>
          <Link to='/game'>
            <img src='' alt='Game page img' />
            <p>Game</p>
          </Link>
        </li>
      )}
      {location.pathname !== '/about' && (
        <li hidden={false}>
          <Link to='/about'>
            <img src='' alt='About us page img' />
            <p>About us</p>
          </Link>
        </li>
      )}
    </ul>
  );
};
export default Navbar;
