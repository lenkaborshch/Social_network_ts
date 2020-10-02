import {v1} from 'uuid';
import {ActionsTypes} from './reduxStore';

export type DialogType = {
    id: string
    name: string
}

export type AuthorMessage = {
    name: string
    src: string
}

export type MessageType = {
    id: string
    message: string
    author: AuthorMessage
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: 'Vadim'},
        {id: v1(), name: 'Mama'},
        {id: v1(), name: 'Papa'},
        {id: v1(), name: 'Yurii'},
        {id: v1(), name: 'Nik'},
    ],
    messages: [
        {
            id: v1(),
            message: 'Hey',
            author: {
                name: 'Vadim',
                src: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png'
            }
        },
        {
            id: v1(),
            message: 'How are you?',
            author: {
                name: 'Me',
                src: 'https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg'
            }
        },
        {
            id: v1(),
            message: 'Good luck',
            author: {
                name: 'Vadim',
                src: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png'
            }
        },
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
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