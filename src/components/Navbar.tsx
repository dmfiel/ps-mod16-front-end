import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex gap-5 mx-auto">
      <NavLink to={`${import.meta.env.VITE_FRONTEND_URL}/`}>Home</NavLink>
      <NavLink to={`${import.meta.env.VITE_FRONTEND_URL}/register`}>
        Register
      </NavLink>
      <NavLink to={`${import.meta.env.VITE_FRONTEND_URL}/signin`}>
        Sign In
      </NavLink>
      <NavLink to={`${import.meta.env.VITE_FRONTEND_URL}/feed`}>Feed</NavLink>
    </nav>
  );
}
export default NavBar;
