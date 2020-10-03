import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/profileReducer';
import {ActionsTypes} from '../../redux/reduxStore';
import {CombinedState, Store} from "redux";
import {DialogsPageType} from "../../redux/dialogsReducer";
import {SidebarType} from "../../redux/sidebarReducer";
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>>
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer profilePage={props.profilePage}
                     dispatch={props.dispatch}
                     store={props.store}/>
        </div>
    )
}