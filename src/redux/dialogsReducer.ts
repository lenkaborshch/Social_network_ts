import {v1} from 'uuid'
import {ActionsTypes} from './reduxStore'

const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
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

export type DialogsPageType = typeof initialState

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
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
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        }
        default:
            return state
    }
}

export const addMessageAC = (): AddMessageActionType => ({type: SEND_MESSAGE})

export const updateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText
})

type AddMessageActionType = {
    type: typeof SEND_MESSAGE
}

type UpdateNewMessageTextActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newMessageText: string
}