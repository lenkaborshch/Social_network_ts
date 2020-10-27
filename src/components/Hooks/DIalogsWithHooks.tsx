import React, {ChangeEvent} from 'react'
import style from './../Dialogs/Dialogs.module.css'
import {DialogItem} from '../Dialogs/DialogItem/DialogItem'
import {Message} from '../Dialogs/Message/Message'
import {useSelector} from 'react-redux'
import {selectDialogsPage, useDispatch} from '../../redux/reduxStore'
import {updateNewMessageText, addMessage} from '../../redux/dialogsReducer'

export function DialogsWithHooks() {

    const {dialogs, messages, newMessageText} = useSelector(selectDialogsPage)
    const dispatch = useDispatch()

    const dialogsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = messages.map(m => <Message key={m.id} id={m.id} message={m.message}
                                                        author={m.author}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageText(e.currentTarget.value))
    }

    const onSendMessageClick = () => {
        dispatch(addMessage())
    }

    const onPressEnterSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            dispatch(addMessage())
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
                              value={newMessageText}
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
