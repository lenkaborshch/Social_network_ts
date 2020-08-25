import cover from '../../img/cover.jpg';
import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div>
            <div>
                <img className={style.cover} src={cover}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;