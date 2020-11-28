import React from 'react'
import style from './Dialogs.module.css'
import {DialogType, MessageType} from './DialogsContainer'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm'

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (newMessageText: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message key={m.id} id={m.id} message={m.message}
                                                              author={m.author}/>)

    const onSubmit = (formData: any) => {
        props.addMessage(formData.newMessageBody)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div className={style.sendingMessage}>
                    <AddMessageForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}