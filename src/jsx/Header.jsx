import { Link, NavLink, useLocation } from "react-router-dom";
import HeaderModule from '../module_css/Header.module.css';
import Slider from './Slider.jsx';

export const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div>
        {location.pathname == '/' && <Slider />}
      </div>
      <div className={HeaderModule.navbar}>
        <NavLink className={HeaderModule.tab} style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)} to="/">Home</NavLink>
        <NavLink className={HeaderModule.tab} style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)} to="/patients">Patients</NavLink>
        <NavLink className={HeaderModule.tab} style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)} to="/patient_register">Patient Register</NavLink>
        <NavLink className={HeaderModule.tab} style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)} to="/reservation">Reservation</NavLink>
        <NavLink className={HeaderModule.tab} style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)} to="/mypage">My page</NavLink>
        {/* <NavLink className={HeaderModule.tab} style={({ isActive }) => (isActive ? { color: 'blue' } : undefined)} to="/signin">Sign in</NavLink> */}
      </div>
    </header>
  );
}
