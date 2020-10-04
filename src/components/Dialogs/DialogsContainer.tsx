import React from 'react'
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsReducer'
import {Dialogs} from './Dialogs'
import {StoreContext} from "../../StoreContext"

type DialogsPropsType = {}

export function DialogsContainer(props: DialogsPropsType) {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage

                const onChangeMessageText = (value: string) => {
                    store.dispatch(updateNewMessageTextAC(value))
                }

                const onSendMessage = () => {
                    store.dispatch(addMessageAC())
                }
                return (
                    <Dialogs dialogs={state.dialogs} messages={state.messages} newMessageText={state.newMessageText}
                             updateNewMessageText={onChangeMessageText} addMessage={onSendMessage}/>
                )
            }}
        </StoreContext.Consumer>
    )
}