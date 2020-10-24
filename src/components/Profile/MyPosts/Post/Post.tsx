import React from 'react'
import style from './Post.module.css'
import post_image from './../../../../img/penguin.png'

type PostPropsType = {
    message: string
    likesCount: string
}

function Post(props: PostPropsType) {
    return (
        <div className={style.item}>
            <img src={post_image} alt='postImage'/>
            {props.message}
            <div>
                {props.likesCount} <span>❤</span>
            </div>
        </div>
    )
}

export default Post