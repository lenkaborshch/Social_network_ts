import React, {ChangeEvent, useState} from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogsPageType} from '../../redux/state'

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}
                                                                          author={m.author}/>)
    /*

        let [textMessage, setTextMessage] = useState('');

        const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setTextMessage(e.currentTarget.value);
            console.log(textMessage); //??????????????
        }
    */

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }

    const sentMessage = () => {
        props.addMessage()
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.sendingMessage}>
                    <textarea placeholder='Write your message'
                              value={props.dialogsPage.newMessageText}
                              onChange={onChangeHandler}
                    />
                    <button onClick={sentMessage}>Sent</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs