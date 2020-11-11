import {ActionsTypes, AppStateType} from './reduxStore'
import {v1} from 'uuid'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {usersAPI} from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

export type ProfileType = {
    'aboutMe': null | string
    'contacts': {
        'facebook': null | string
        'website': null | string
        'vk': null | string
        'twitter': null | string
        'instagram': null | string
        'youtube': null | string
        'github': null | string
        'mainLink': null | string
    },
    'lookingForAJob': boolean
    'lookingForAJobDescription': null | string
    'fullName': null | string
    'userId': number
    'photos': {
        'small': null | string
        'large': null | string
    }
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: null | ProfileType
}

export type PostType = {
    id: string
    message: string
    likesCount: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hey', likesCount: '20'},
        {id: v1(), message: 'How are you?', likesCount: '2'}
    ],
    newPostText: '',
    profile: null
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
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
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
export const setUserPage = (profile: ProfileType): SetUsersPageActionType => ({
    type: SET_USERS_PROFILE,
    profile
})

export const getProfile = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
        usersAPI.getProfile(userId)
            .then((res) => {
                dispatch(setUserPage(res.data))
            })
    }
}

type AddPostActionType = {
    type: typeof ADD_POST
}

type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
type SetUsersPageActionType = {
    type: typeof SET_USERS_PROFILE
    profile: ProfileType
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>