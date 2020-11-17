import {addMessage, updateNewMessageText} from '../../redux/dialogsReducer'
import {Dialogs} from './Dialogs'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {withAuthRedirect} from '../common/hoc/WithAuthRedirect'
import {compose} from 'redux'
import React from 'react'

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

export default compose(
    connect<MapStatePropsType, MapDispatchType, {}, AppStateType>(mapStateToProps, {updateNewMessageText, addMessage}),
    withAuthRedirect)
(Dialogs) as React.ComponentType
