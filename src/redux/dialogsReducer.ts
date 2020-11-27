import {v1} from 'uuid'
import {ActionsTypes} from './reduxStore'

const SEND_MESSAGE = 'SEND_MESSAGE'

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
}

export type DialogsPageType = typeof initialState

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: v1(),
                message: action.newMessageText,
                author: {
                    name: 'Me',
                    src: 'https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg'
                }
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        }
        default:
            return state
    }
}

export const addMessage = (newMessageText: string): AddMessageActionType => ({type: SEND_MESSAGE, newMessageText})
type AddMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}