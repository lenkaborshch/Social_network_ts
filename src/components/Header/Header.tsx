import React from 'react';
import logo from '../../img/planet.png';
import style from './Header.module.css';

function Header() {
    return (
        <header className={style.header}>
            <img src={logo}/>
        </header>
    )
}

export default Header;