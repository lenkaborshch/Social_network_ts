import {v1} from 'uuid';
import {ChangeEvent} from 'react';

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

export type PostType = {
    id: string
    message: string
    likesCount: string
}

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

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type FriendType = {
    id: string
    name: string
    src: string
}

export type SidebarType = {
    friends: Array<FriendType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
// ReturnType<typeof addPostAC> === type addPostType = {type: 'ADD_POST'}; ReturnType - Создает тип, состоящий из возвращаемого типа функции Type.

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hey', likesCount: '20'},
                {id: v1(), message: 'How are you?', likesCount: '2'}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    id: v1(),
                    name: 'Vadim',
                    src: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png'
                },
                {
                    id: v1(),
                    name: 'Busya',
                    src: 'https://i.pinimg.com/originals/1c/ba/1e/1cba1e5e40356f6edb0235c8a09a07d5.jpg'
                },
                {
                    id: v1(),
                    name: 'Freud',
                    src: 'https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC_400x400.jpg'
                }
            ]
        }
    },
    _callSubscriber(state: RootStateType) {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST: {
                let newPost: PostType = {
                    id: v1(),
                    message: this._state.profilePage.newPostText,
                    likesCount: '0'
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
                break
            }
            case UPDATE_NEW_POST_TEXT: {
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
                break
            }
            case SEND_MESSAGE: {
                let newMessage = {
                    id: v1(),
                    message: this._state.dialogsPage.newMessageText,
                    author: {
                        name: 'Me',
                        src: 'https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg'
                    }
                }
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber(this._state)
                break
            }
            case UPDATE_NEW_MESSAGE_TEXT: {
                this._state.dialogsPage.newMessageText = action.newMessageText
                this._callSubscriber(this._state)
                break
            }
            default:
                throw new Error('Bad action')
        }
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const

export const updateNewPostTextAC = (newPostText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newPostText
}) as const

export const addMessageAC = () => ({type: SEND_MESSAGE}) as const

export const updateNewMessageTextAC = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newText
}) as const

export default store