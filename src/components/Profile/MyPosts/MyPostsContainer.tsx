import React from 'react'
import {addPostAC, PostType, updateNewPostTextAC} from '../../../redux/profileReducer'
import {MyPosts} from "./MyPosts"
import {connect} from "react-redux"
import {ActionsTypes, AppStateType} from "../../../redux/reduxStore"


type MapStatePropsType = {
    newPostText: string
    posts: Array<PostType>
}

type MapDispatchType = {
    updateNewPostText: (value: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
})

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchType => ({
    updateNewPostText(value: string) {
        dispatch(updateNewPostTextAC(value));
    },
    addPost() {
        dispatch(addPostAC())
    }
})

export const MyPostsContainer = connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, mapDispatchToProps)(MyPosts)