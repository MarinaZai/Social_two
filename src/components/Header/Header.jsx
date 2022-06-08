import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Header/Header.module.css';

export const Header =(props) => {
    return <header className={s.header}>
    <img alt='headerlogo'src='https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?w=2000'></img>
  <div className={s.loginBlock}>
    {props.isAuth ? props.loginBlock
    :  <NavLink to={'/login'}>Login</NavLink>}
   
  </div>
  </header>
}