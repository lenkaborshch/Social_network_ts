import {combineReducers, createStore, Store} from 'redux'
import {addPostAC, profileReducer, updateNewPostTextAC} from './profileReducer'
import {addMessageAC, dialogsReducer, updateNewMessageTextAC} from './dialogsReducer'
import {sidebarReducer} from './sidebarReducer'
import {followAC, setUsersAC, unfollowAC, usersReducer} from "./usersReducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

type RootReducerType = typeof rootReducer // (state: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer)
