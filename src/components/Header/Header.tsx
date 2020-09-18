import React from 'react';
import logo from '../../img/planet.png';
import style from './Header.module.css';

function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt='logoImage'/>
        </header>
    )
}

export default Header;