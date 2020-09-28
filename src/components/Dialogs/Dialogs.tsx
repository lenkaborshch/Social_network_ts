import React, {ChangeEvent} from 'react'
import style from './Dialogs.module.css'
import {ActionsTypes, DialogsPageType} from '../../redux/state'
import { DialogItem } from './DialogItem/DialogItem'
import { Message } from './Message/Message'
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}
                                                                          author={m.author}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    const onSendMessageClick = () => {
        props.dispatch(addMessageAC())
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
                              value={props.dialogsPage.newMessageText}
                              onChange={onChangeHandler}
                    />
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}