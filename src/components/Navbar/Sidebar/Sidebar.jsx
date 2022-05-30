import React from 'react';
import s from '../Sidebar/Sidebar.module.css';
import { NavLink } from "react-router-dom";
import { SidebarItem } from './SidebarItem/SidebarItem';
import { store } from '../../../redux/redux-store';


function active(params) {
  if (params.isActive) {
    return s.activeLink
  } else {
    return ''
  }
}                         /* navData => navData.isActive ? s.activeLink : "" */

export const Sidebar = (props) => {
  let sidebarElements = props.friends.map(
    friend => (<SidebarItem key={friend.id} name={friend.name} />)
  )
  return (
    <div className={s.item}>
      <NavLink to='#' className={active}>Friends</NavLink>
      <div className={s.friends}> {sidebarElements}</div>
    </div>
  )

}
