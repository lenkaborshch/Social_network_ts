import React from 'react'
import style from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profileReducer'
import {ProfileStatus} from './ProfileStatus'

type ProfileInfoPropsType = {
    profile: ProfileType
    status: null | string
    updateStatus: (status: string) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    const photo = props.profile.photos.large
        ? <img className={style.userPhoto} src={props.profile.photos.large} alt='userImage'/>
        : <img className={style.userPhoto} src='https://www.meme-arsenal.com/memes/18fc6121a90eb592850a5722ee98a963.jpg'
               alt='userImage'/>

    const aboutMe = props.profile.aboutMe && <span>Обо мне: {props.profile.aboutMe}</span>
    const lookingForAJob = props.profile.lookingForAJob
        ? <img src='https://i.pinimg.com/originals/e2/02/4c/e2024c7b6af9d0b137ccc9918c36aac1.jpg' alt='notJobImg'/>
        : <img src='https://www.meme-arsenal.com/memes/8d9abed4e883de1f5b20a14386eb9d38.jpg' alt='jobImg'/>

    return (
        <div>
            <div className={style.descriptionBlock}>
                <div>{photo}</div>
                <div>
                    <p>Имя: {props.profile.fullName}</p>
                    <p>{aboutMe}</p>
                    В поисках работы: <p className={style.statusJob}>{lookingForAJob}</p>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}