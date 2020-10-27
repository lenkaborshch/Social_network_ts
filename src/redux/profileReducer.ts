import {ActionsTypes} from './reduxStore'
import {v1} from 'uuid'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    posts: [
        {id: v1(), message: 'Hey', likesCount: '20'},
        {id: v1(), message: 'How are you?', likesCount: '2'}
    ],
    newPostText: ''
}

export type ProfilePageType = typeof initialState
export type PostType = {
    id: string
    message: string
    likesCount: string
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: '0'
            }
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default: {
            return state
        }
    }
}

export const addPost = (): AddPostActionType => ({type: ADD_POST})

export const updateNewPostText = (newText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
})

type AddPostActionType = {
    type: typeof ADD_POST
}

type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}