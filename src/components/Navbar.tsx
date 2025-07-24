import { NavLink } from 'react-router-dom';
import { navigateBaseURL } from '../App';

function NavBar() {
  return (
    <nav className="flex gap-5 mx-auto">
      <NavLink to={`${navigateBaseURL}/`}>Home</NavLink>
      <NavLink to={`${navigateBaseURL}/register`}>Register</NavLink>
      <NavLink to={`${navigateBaseURL}/signin`}>Sign In</NavLink>
      <NavLink to={`${navigateBaseURL}/feed`}>Feed</NavLink>
    </nav>
  );
}
export default NavBar;
