import {ActionsTypes, AppStateType} from './reduxStore'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {authAPI} from '../api/api'

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

export const getAuthUserData = (): ThunkType => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
    authAPI.me()
        .then(res => {
                if (res.resultCode === 0) {
                    let {id, login, email} = res.data
                    dispatch(setAuthUserData(id, login, email))
                }
            }
        )
}


export const authLogin = (login: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
        authAPI.login(login, password, rememberMe)
            .then(res => {
                    if (res.resultCode === 0) {
                        dispatch(getAuthUserData())
                    }
                }
            )
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
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>