import {combineReducers, createStore} from 'redux'
import {addPost, profileReducer, setUserPage, updateNewPostText} from './profileReducer'
import {addMessage, dialogsReducer, updateNewMessageText} from './dialogsReducer'
import {sidebarReducer} from './sidebarReducer'
import {follow, setCurrentPage, setTotalCount, setUsers, toggleIsFetching, unfollow, usersReducer} from './usersReducer'
import {useDispatch as _useDispatch} from 'react-redux'
import {authReducer, setAuthUserData} from './authReducer'

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateNewMessageText>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserPage>
    | ReturnType<typeof setAuthUserData>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
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