import {applyMiddleware, combineReducers, createStore} from 'redux'
import {addPost, profileReducer, setStatus, setUserPage} from './profileReducer'
import {addMessage, dialogsReducer} from './dialogsReducer'
import {sidebarReducer} from './sidebarReducer'
import {
    followSuccess,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowing,
    unfollowSuccess,
    usersReducer
} from './usersReducer'
import {useDispatch as _useDispatch} from 'react-redux'
import {authReducer, setAuthUserData} from './authReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserPage>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFollowing>
    | ReturnType<typeof setStatus>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

type RootReducerType = typeof rootReducer // это типизация самой функции === (state: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store

// for DialogsWithHooks
interface IRootState extends AppStateType {
} // нужно называть именно IRootState!!!

export const selectDialogsPage = (state: IRootState) => state.dialogsPage // вместо mapStateToProps
export function useDispatch() { // вместо mapDispatchToProps
    const dispatch = _useDispatch()
    return (ac: ActionsTypes) => dispatch(ac)
}

// благодаря useSelector и useDispatch можно не использовать connect