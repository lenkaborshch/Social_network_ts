import React from 'react'
import style from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'

type DialogItemType = {
    id: string
    name: string
}

export function DialogItem(props: DialogItemType) {
    return (
        <div className={style.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}