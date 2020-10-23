import {combineReducers, createStore} from 'redux'
import {addPostAC, profileReducer, updateNewPostTextAC} from './profileReducer'
import {addMessageAC, dialogsReducer, updateNewMessageTextAC} from './dialogsReducer'
import {sidebarReducer} from './sidebarReducer'
import {followAC, setUsersAC, unfollowAC, usersReducer} from "./usersReducer"
import {useDispatch as _useDispatch} from "react-redux"

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
    usersPage: usersReducer,
})

type RootReducerType = typeof rootReducer // єто типизация самой функции === (state: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer)


// for DialogsWithHooks
interface IRootState extends AppStateType {} // нужно называть именно IRootState!!!

export const selectDialogsPage = (state: IRootState) => state.dialogsPage // вместо mapStateToProps
export function useDispatch() { // вместо mapDispatchToProps
    const dispatch = _useDispatch()
    return (ac: ActionsTypes) => dispatch(ac)
}
// благодаря useSelector и useDispatch можно не использовать connect