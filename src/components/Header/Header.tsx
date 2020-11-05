import React from 'react'
import logo from '../../img/planet.png'
import style from './Header.module.css'
import {NavLink} from 'react-router-dom'

type HeaderPropsType = {
    isAuth: boolean
    setAuthUserData: (id: number, login: string, email: string) => void
    id: null | number
    login: null | string
    email: null | string
}

export function Header(props: HeaderPropsType) {
    return (
        <header className={style.header}>
            <img src={logo} alt='logoImage'/>
            <div className={style.loginBlock}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}