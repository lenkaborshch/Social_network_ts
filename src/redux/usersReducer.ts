import {ActionsTypes} from './reduxStore'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

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
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 5,
    currentPage: 1
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
        default: {
            return state
        }
    }
}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})
export const setTotalCountAC = (totalCount: number): setTotalCountActionType => ({type: SET_TOTAL_COUNT, totalCount})
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})

type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}

type UnollowActionType = {
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