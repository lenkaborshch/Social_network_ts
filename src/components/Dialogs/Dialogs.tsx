import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem id='1' name='Vadim'/>
                <DialogItem id='2' name='Mama'/>
                <DialogItem id='3' name='Papa'/>
                <DialogItem id='4' name='Yurii'/>
                <DialogItem id='5' name='Nik'/>
            </div>
            <div className={style.messages}>
                <Message message='Hello'/>
                <Message message='Hi, how are u?'/>
                <Message message='Woow'/>
            </div>
        </div>
    )
}

export default Dialogs;