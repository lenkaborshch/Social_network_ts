import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes,ProfilePageType} from '../../redux/state';
import { MyPosts } from './MyPosts/MyPosts';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}/>
        </div>
    )
}