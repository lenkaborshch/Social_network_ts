import {combineReducers, createStore} from 'redux'
import {addPostAC, profileReducer, updateNewPostTextAC} from './profileReducer'
import {addMessageAC, dialogsReducer, updateNewMessageTextAC} from './dialogsReducer'
import {sidebarReducer} from './sidebarReducer'
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC, usersReducer} from './usersReducer'
import {useDispatch as _useDispatch} from 'react-redux'

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setCurrentPageAC>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

type RootReducerType = typeof rootReducer // это типизация самой функции === (state: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer)


// for DialogsWithHooks
interface IRootState extends AppStateType {
} // нужно называть именно IRootState!!!

export const selectDialogsPage = (state: IRootState) => state.dialogsPage // вместо mapStateToProps
export function useDispatch() { // вместо mapDispatchToProps
    const dispatch = _useDispatch()
    return (ac: ActionsTypes) => dispatch(ac)
}

// благодаря useSelector и useDispatch можно не использовать connect