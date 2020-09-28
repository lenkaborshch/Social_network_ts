import React from 'react';
import style from './Message.module.css';
import {AuthorMessage} from '../../../redux/state';

type MessageType = {
    message: string
    author: AuthorMessage
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