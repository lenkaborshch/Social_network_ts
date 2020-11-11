import {ActionsTypes, AppStateType} from './reduxStore'
import {usersAPI} from '../api/api'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}
const initialState = {
    users: [] as Array<UserType>, // or ||
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]
}

export type UsersPageType = typeof initialState


export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: {
            return state
        }
    }
}

export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setTotalCount = (totalCount: number): setTotalCountActionType => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleIsFollowing = (userId: number, isFetching: boolean): toggleIsFollowingActionType => ({
    type: TOGGLE_IS_FOLLOWING,
    userId,
    isFetching
})

export const getUsers = (pageSize: number, currentPage: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(pageSize, currentPage)
            .then((res) => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(res.items))
                dispatch(setTotalCount(res.totalCount))
            })
    }
}

export const unfollow = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
        dispatch(toggleIsFollowing(userId, true))
        usersAPI.unfollow(userId).then(res => {
            if (res.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowing(userId, false))
        })
    }
}

export const follow = (userId: number): ThunkType => {
    return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes>): void => {
        dispatch(toggleIsFollowing(userId, true))
        usersAPI.follow(userId).then(res => {
            if (res.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowing(userId, false))
        })
    }
}


type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

type setTotalCountActionType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

type toggleIsFollowingActionType = {
    type: typeof TOGGLE_IS_FOLLOWING
    userId: number
    isFetching: boolean
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>