import React, {ChangeEvent} from 'react'
import style from './Dialogs.module.css'
import {DialogsPageType} from '../../redux/dialogsReducer'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {ActionsTypes} from '../../redux/reduxStore'
import {addPostAC, ProfilePageType} from '../../redux/profileReducer';
import {Dialogs} from './Dialogs'
import {CombinedState, Store} from "redux";
import {SidebarType} from "../../redux/sidebarReducer";

type DialogsPropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>>
}

export function DialogsContainer(props: DialogsPropsType) {

    const state = props.store.getState().dialogsPage

    const onChangeMessageText = (value: string) => {
        props.store.dispatch(updateNewMessageTextAC(value))
    }

    const onSendMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    return (
        <Dialogs dialogs={state.dialogs} messages={state.messages} newMessageText={state.newMessageText}
                 updateNewMessageText={onChangeMessageText} addMessage={onSendMessage}/>
    )
}