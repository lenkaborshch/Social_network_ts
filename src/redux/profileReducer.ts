import {ActionsTypes} from './reduxStore';
import {v1} from 'uuid'

export type PostType = {
    id: string
    message: string
    likesCount: string
}

export type ProfilePageType = {
        posts: Array<PostType>
        newPostText: string
}

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState: ProfilePageType = {
        posts: [
            {id: v1(), message: 'Hey', likesCount: '20'},
            {id: v1(), message: 'How are you?', likesCount: '2'}
        ],
        newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: '0'
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default: {
            return state
        }
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const

export const updateNewPostTextAC = (newPostText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newPostText
}) as const