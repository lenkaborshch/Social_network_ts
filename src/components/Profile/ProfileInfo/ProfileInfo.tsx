import cover from '../../../img/cover.jpg'
import React from 'react'
import style from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={style.cover} src={cover} alt='coverImage'/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;