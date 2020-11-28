import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import {PostType} from '../../../redux/profileReducer'
import AddPostForm from './AddPostForm/AddPostForm'

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElement = props.posts.map(p => <Post key={p.id} message={p.message}
                                                    likesCount={p.likesCount}/>)

    const onClickAddPost = (formData: any) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div>
            My posts
            <div>
                <AddPostForm onSubmit={onClickAddPost}/>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}