import {ActionsTypes, AppStateType} from './reduxStore'
import {v1} from 'uuid'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {profileAPI} from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
    profile: null | ProfileType
    status: null | string
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
    profile: null,
    status: null
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likesCount: '0'
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state
        }
    }
}

export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})
export const setUserPage = (profile: ProfileType): SetUsersPageActionType => ({
    type: SET_USERS_PROFILE,
    profile
})
export const setStatus = (status: string): SetStatusActionType => ({
    type: SET_STATUS,
    status
})

export const getProfile = (userId: string): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
        profileAPI.getProfile(userId)
            .then((res) => {
                dispatch(setUserPage(res.data))
            })
    }
}

export const getStatus = (userId: string): ThunkType => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
    profileAPI.getStatus(userId)
        .then((status) => {
            if (status) dispatch(setStatus(status))
        })
}

export const updateStatus = (status: string): ThunkType => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
    profileAPI.updateStatus(status)
        .then((res) => {
            if (res.resultCode === 0) dispatch(setStatus(status))
        })
}

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}

type SetUsersPageActionType = {
    type: typeof SET_USERS_PROFILE
    profile: ProfileType
}
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>