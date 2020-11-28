import React from 'react'
import style from './../Dialogs/Dialogs.module.css'
import {DialogItem} from '../Dialogs/DialogItem/DialogItem'
import {Message} from '../Dialogs/Message/Message'
import {useSelector} from 'react-redux'
import {selectDialogsPage, useDispatch} from '../../redux/reduxStore'
import {addMessage} from '../../redux/dialogsReducer'
import AddMessageForm from '../Dialogs/AddMessageForm/AddMessageForm'

export function DialogsWithHooks() {

    const {dialogs, messages} = useSelector(selectDialogsPage)
    const dispatch = useDispatch()

    const dialogsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = messages.map(m => <Message key={m.id} id={m.id} message={m.message}
                                                        author={m.author}/>)

    const onSubmit = (formData: any) => {
        dispatch(addMessage(formData.newMessageBody))
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
