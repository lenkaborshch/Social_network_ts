import {ActionsTypes} from './reduxStore';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: [] as Array<UserType>
}

export type UsersPageType = typeof initialState
export type UserType = {
    id: string
    followed: boolean
    fullName: string
    photoUrl: string
    status: string
    location: {
        city: string
        country: string
    }
}

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

export const followAC = (userId: string): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string): UnollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})

type FollowActionType = {
    type: typeof FOLLOW
    userId: string
}

type UnollowActionType = {
    type: typeof UNFOLLOW
    userId: string
}

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}