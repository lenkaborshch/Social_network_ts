import React from 'react';
import style from './Sidebar.module.css';
import {FriendType} from '../../../redux/sidebarReducer';

type SidebarPropsType = {
    friends: Array<FriendType>
}

export function Sidebar(props: SidebarPropsType) {
    let sidebarFriends = props.friends.map(f => {
        return (
            <div className={style.sidebarFriend} key={f.id}>
                <img src={f.src} alt='friendsPhoto'/>
                <p className={style.friendName}>{f.name} </p>
            </div>
        )
    })
    return (
        <div className={style.sidebarWrapper}>
            <h3>Friends</h3>
            {sidebarFriends}
        </div>
    )
}