import React from 'react'
import style from './Dialogs.module.css'
import {DialogType, MessageType} from './DialogsContainer'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (newMessageText: string) => void
}

const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name='newMessageBody' component='textarea' placeholder='Write your message'/>
            </div>
            <div>
                <button type='submit'>Send</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({
    form: 'AddMessageForm'
})(AddMessageForm)

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
                    <AddMessageReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}