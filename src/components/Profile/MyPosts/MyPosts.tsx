import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostAC, ProfilePageType, updateNewPostTextAC} from '../../../redux/state';

type MyPostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message}
                                                                likesCount={p.likesCount}/>);

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value));
    }
    const addPost = () => {
        props.dispatch(addPostAC());
    }

    return (
        <div>
            My posts
            <div>
                <textarea placeholder='Write your post message'
                          value={props.profilePage.newPostText}
                          onChange={onChangeHandler}
                />
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}