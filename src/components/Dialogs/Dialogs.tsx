import React, {ChangeEvent} from 'react'
import style from './Dialogs.module.css'
import {DialogsPageType, DialogType, MessageType} from '../../redux/dialogsReducer'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    updateNewMessageText: (value: string) => void
    addMessage: () => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}
                                                                          author={m.author}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    const onSendMessageClick = () => {
        props.addMessage()
    }

    const onPressEnterSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            props.addMessage()
        }
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div className={style.sendingMessage}>
                    <textarea placeholder='Write your message'
                              value={props.newMessageText}
                              onChange={onChangeHandler}
                              onKeyDown={onPressEnterSendMessage}
                    />
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}