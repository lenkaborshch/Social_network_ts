import {ActionsTypes, AppStateType} from './reduxStore'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

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
                ...action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_AUTH_DATA,
        payload: {id, login, email, isAuth}
    } as const
}

export const getAuthUserData = (): ThunkType => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
    authAPI.me()
        .then(res => {
                if (res.resultCode === 0) {
                    let {id, login, email} = res.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            }
        )
}


export const login = (login: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
        authAPI.login(login, password, rememberMe)
            .then(res => {
                    if (res.resultCode === 0) {
                        dispatch(getAuthUserData())
                    } else {
                        let messageError = res.messages.length ? res.messages[0] : 'Some error'
                        // @ts-ignore
                        dispatch(stopSubmit('Login', {_error: messageError}))
                    }
                }
            )
    }
}

export const logout = (): ThunkType => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
    authAPI.logout()
        .then(res => {
                if (res.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            }
        )
}
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>