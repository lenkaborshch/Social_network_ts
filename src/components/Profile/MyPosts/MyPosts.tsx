import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType, PostType} from '../../../redux/profileReducer';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer';
import {ActionsTypes} from '../../../redux/reduxStore';
import {CombinedState, Store} from "redux";
import {DialogsPageType} from "../../../redux/dialogsReducer";
import {SidebarType} from "../../../redux/sidebarReducer";

type MyPostsPropsType = {
    newPostText: string
    posts: Array<PostType>
    updateNewPostText: (value: string) => void
    addPost: () => void
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElement = props.posts.map(p => <Post key={p.id} message={p.message}
                                                    likesCount={p.likesCount}/>);

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const onClickAddPost = () => {
        props.addPost()
    }

    const onPressEnterAddPost = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            props.addPost()
        }
    }

    return (
        <div>
            My posts
            <div>
                <textarea placeholder='Write your post message'
                          value={props.newPostText}
                          onChange={onChangeHandler}
                          onKeyPress={onPressEnterAddPost}
                />
                <div>
                    <button onClick={onClickAddPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}