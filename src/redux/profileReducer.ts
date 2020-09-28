import {ActionsTypes, PostType, ProfilePageType} from './state'
import {v1} from 'uuid'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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