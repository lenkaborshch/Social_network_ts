import {ActionsTypes} from './reduxStore'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [] as Array<UserType>
}
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default: {
            return state
        }
    }
}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})

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