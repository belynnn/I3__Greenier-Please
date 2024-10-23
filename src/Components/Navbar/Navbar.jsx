import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li> <Link to="">Home </Link></li>
            <li> <Link to="/game">Game</Link> </li>
            <li> <Link to="/about">About us</Link> </li>
        </ul>
    );
};
export default Navbar;