import {combineReducers, createStore} from 'redux';
import {addPostAC, profileReducer, updateNewPostTextAC, ProfilePageType} from './profileReducer';
import {addMessageAC, dialogsReducer, updateNewMessageTextAC, DialogsPageType} from './dialogsReducer';
import {sidebarReducer, SidebarType} from './sidebarReducer';

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

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store = createStore(reducers)