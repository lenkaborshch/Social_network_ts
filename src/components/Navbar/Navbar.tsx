import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import {SidebarType} from '../../redux/sidebarReducer';

type NavbarPropsType = {
    state: SidebarType
}

export function Navbar(props: NavbarPropsType) {
    return (
        <nav className="nav">
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
            </div>
            <div>
                <Sidebar state={props.state}/>
            </div>
        </nav>
    )
}