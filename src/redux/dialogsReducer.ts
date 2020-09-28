import {v1} from 'uuid';
import {ActionsTypes, DialogsPageType} from './state';

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: v1(),
                message: state.newMessageText,
                author: {
                    name: 'Me',
                    src: 'https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg'
                }
            }
            state.messages.push(newMessage);
            state.newMessageText = ''
            return state
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessageText
            return state
        }
        default:
            return state
    }
}

export const addMessageAC = () => ({type: SEND_MESSAGE}) as const

export const updateNewMessageTextAC = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newText
}) as const