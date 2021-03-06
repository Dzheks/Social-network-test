import React from "react";
import { NavLink } from "react-router-dom";
import s from'./Navbar.module.css'


const Navbar = () => {
    return  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }>Massages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/Music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to ="/Friends" className = { navData => navData.isActive ? s.active : s.item }>Friends</NavLink>
    </div>
  </nav>
}
export default Navbar;