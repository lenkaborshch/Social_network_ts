import {ActionsTypes} from './reduxStore'

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

export type UserAuthDataType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

const initialState: UserAuthDataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: UserAuthDataType = initialState, action: ActionsTypes): UserAuthDataType => {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (id: number, login: string, email: string): AddPostActionType => {
    return {
        type: SET_USER_AUTH_DATA,
        data: {id, login, email}
    }
}

type AddPostActionType = {
    type: typeof SET_USER_AUTH_DATA
    data: {
        id: number
        login: string
        email: string
    }
}