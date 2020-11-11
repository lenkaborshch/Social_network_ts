import axios from 'axios'
import {UserType} from '../redux/usersReducer'
import {ProfileType} from '../redux/profileReducer'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1b7c72fc-c879-4275-88e5-e33388eb8130',
    }
})

type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
type GetUserData = {
    data: {
        id: number
        login: string
        email: string
    }
    fieldsErrors: []
    messages: string[]
    resultCode: number
}
type FollowUnfollowUserType = {
    resultCode: number
    messages: string[]
    data: {}
}

export const usersAPI = {
    getUsers: (pageSize: number, currentPage: number) => {
        return instance.get<GetUsersType>(`users?count=${pageSize}&page=${currentPage}`)
            .then(res => res.data)
    },
    unfollow: (userId: number) => {
        return instance.delete<FollowUnfollowUserType>(`follow/${userId}`)
            .then(res => res.data)
    },
    follow: (userId: number) => {
        return instance.post<FollowUnfollowUserType>(`follow/${userId}`)
            .then(res => res.data)
    },
    getProfile: (userId: string) => {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
}

export const authAPI = {
    me: () => {
        return instance.get<GetUserData>(`auth/me`)
            .then(res => res.data)
    },
}