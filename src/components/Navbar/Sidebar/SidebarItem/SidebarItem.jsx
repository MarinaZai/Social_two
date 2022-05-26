import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../SidebarItem/SidebarItem.module.css'

export const SidebarItem = (props) => {
    return (
        <div className={s.friend}>
            <img src='https://s0.rbk.ru/v6_top_pics/media/img/5/14/756481953203145.png' alt='ava' className={s.avatarfriend} />
            <NavLink to='#'>{props.name}</NavLink>
        </div>
    )
}
