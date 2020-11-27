import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import {PostType} from '../../../redux/profileReducer'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}

const AddPostForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='newPostText' component='textarea' placeholder='Write your post message'/>
            </div>
            <div>
                <button type='submit'>Add post</button>
                <button>Remove</button>
            </div>
        </form>
    )
}

export const AddPostFormReduxForm = reduxForm({
    form: 'AddPostForm'
})(AddPostForm)

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
                <AddPostFormReduxForm onSubmit={onClickAddPost}/>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}