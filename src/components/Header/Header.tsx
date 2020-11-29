import React from 'react'
import logo from '../../img/planet.png'
import style from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logout} from '../../redux/authReducer'

type HeaderPropsType = {
    isAuth: boolean
    id: null | number
    login: null | string
    email: null | string
}

export function Header(props: HeaderPropsType) {
    const dispatch = useDispatch()

    const onClickLogout = () => {
        dispatch(logout())
    }

    return (
        <header className={style.header}>
            <img src={logo} alt='logoImage'/>
            <div className={style.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login}
                            <button onClick={onClickLogout}>Log out</button>
                        </div>
                        : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}