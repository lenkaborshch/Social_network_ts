import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea placeholder="Write your post message"/>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message="Hello" likesCount="25"/>
                <Post message="It`s my first social network" likesCount="14"/>
            </div>
        </div>
    )
}

export default MyPosts;