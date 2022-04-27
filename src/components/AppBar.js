import { NavLink } from 'react-router-dom';
import './AppBar.css';

const AppBar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (!isActive ? 'link' : 'activeLink')}
      >
        Home
      </NavLink>
      <NavLink
        to="/films"
        className={({ isActive }) => (!isActive ? 'link' : 'activeLink')}
      >
        Films
      </NavLink>
    </nav>
  );
};

export default AppBar;
