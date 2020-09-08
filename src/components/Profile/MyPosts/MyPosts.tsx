import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType = {
    state:  { posts: Array<PostType> }
}

function MyPosts(props: MyPostsPropsType) {

    const postsElement = props.state.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;