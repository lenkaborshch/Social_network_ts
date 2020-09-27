import React, {ChangeEvent} from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {ActionsTypes, addMessageAC, DialogsPageType, updateNewMessageTextAC,} from '../../redux/state'

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}
                                                                          author={m.author}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e))
    }

    const sentMessage = () => {
        props.dispatch(addMessageAC())
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