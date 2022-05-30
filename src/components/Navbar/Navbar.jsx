import React from 'react';
import s from '../Navbar/Navbar.module.css';
import { NavLink } from "react-router-dom";
import { Sidebar } from '../Navbar/Sidebar/Sidebar';


function active(params) {
  if (params.isActive) {
    return s.activeLink
  } else {
    return ''
  }
}                         /* navData => navData.isActive ? s.activeLink : "" */

export const Navbar = (props) => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' className={active}>Profile</NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to='/dialogs' className={active}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news' className={active}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music' className={active}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/settings' className={active}>Settings</NavLink>
    </div>
    <div className={s.item}>
      <Sidebar friends={props.state.friends} />
    </div>
  </nav>
}
