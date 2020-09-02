import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {v1} from 'uuid';

type DialogsDataType = {
    id: string
    name: string
}

type MessageDataType = {
    id: string
    message: string
}

function Dialogs() {

    let dialogs: Array<DialogsDataType> = [
        {id: v1(), name: 'Vadim'},
        {id: v1(), name: 'Mama'},
        {id: v1(), name: 'Papa'},
        {id: v1(), name: 'Yurii'},
        {id: v1(), name: 'Nik'},
    ];

    let messages: Array<MessageDataType> = [
        {id: v1(), message: 'Hey'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Yoo'},
        {id: v1(), message: 'Woow'}
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>) }
            </div>
            <div className={style.messages}>
                { messages.map(m => <Message key={m.id} message={m.message}/>) }
            </div>
        </div>
    )
}

export default Dialogs;