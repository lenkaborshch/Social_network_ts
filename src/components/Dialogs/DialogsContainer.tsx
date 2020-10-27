import {addMessage, updateNewMessageText} from '../../redux/dialogsReducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'

export type AuthorMessageType = {
    name: string
    src: string
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
    author: AuthorMessageType
}

type MapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

type MapDispatchType = {
    updateNewMessageText: (value: string) => void
    addMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
})

export const DialogsContainer = connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {updateNewMessageText, addMessage})(Dialogs)