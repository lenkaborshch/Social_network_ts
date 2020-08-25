import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={style.active}>Vadim</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={style.active}>Mama</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={style.active}>Papa</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={style.active}>Yurii</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/5' activeClassName={style.active}>Nik</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello</div>
                <div className={style.message}>Hi, how are u?</div>
                <div className={style.message}>Woow</div>
            </div>
        </div>
    )
}

export default Dialogs;