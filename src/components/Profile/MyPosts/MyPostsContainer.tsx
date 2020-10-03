import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from '../../../redux/profileReducer';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import {ActionsTypes} from '../../../redux/reduxStore';
import {CombinedState, Store} from "redux";
import {DialogsPageType} from "../../../redux/dialogsReducer";
import {SidebarType} from "../../../redux/sidebarReducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>>
}

export function MyPostsContainer(props: MyPostsPropsType) {

    const state = props.store.getState().profilePage

    const onChangePostText = (value: string) => {
        props.dispatch(updateNewPostTextAC(value));
    }

    const clickAddPost = () => {
        props.dispatch(addPostAC());
    }

    return (
        <MyPosts newPostText={state.newPostText} posts={state.posts}
                 updateNewPostText={onChangePostText} addPost={clickAddPost}/>
    )
}