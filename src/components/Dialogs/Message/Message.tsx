import React from 'react'
import style from './Message.module.css'
import {AuthorMessageType} from '../DialogsContainer'

type MessageType = {
    id: string
    message: string
    author: AuthorMessageType
}

export function Message(props: MessageType) {
    return (
        <div className={style.wrapperMessage}>
            <img src={props.author.src} className={style.avatar} alt='authorImage'/>
            <div className={style.message}>
                <div className={style.author}>{props.author.name}</div>
                <div>
                    <span className={style.messageText}>{props.message}</span>
                </div>
            </div>
        </div>
    )
}