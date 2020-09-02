import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {v1} from 'uuid';

type PostsDataType = {
    id: string
    message: string
    likesCount: string
}

function MyPosts() {

    let posts: Array<PostsDataType> = [
        {id: v1(), message: 'Hey', likesCount: '20'},
        {id: v1(), message: 'How are you?', likesCount: '2'}
    ]

    return (
        <div>
            My posts
            <div>
                <textarea placeholder='Write your post message'/>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                { posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>) }
            </div>
        </div>
    )
}

export default MyPosts;