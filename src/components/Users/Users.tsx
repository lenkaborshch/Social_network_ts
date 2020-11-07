import React from 'react'
import {UserType} from '../../redux/usersReducer'
import style from './Users.module.css'
import {Preloader} from '../common/Preloader/Preloader'
import {NavLink} from 'react-router-dom'
import {followAPI} from '../../api/api'

type UsersPropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (page: number) => void
    isFetching: boolean
    followingInProgress: number[]
    toggleIsFollowing: (userId: number, isFetching: boolean) => void
}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= 15; i++) { //вместо pagesCount будет 15, чтобы не показывать все страницы
        pages.push(i)
    }
    const users = props.users.map((u) => {
        return (
            <div key={u.id}>
                <div>
                    <NavLink to={`profile/${u.id}`}>
                        <img className={style.userPhoto} width='200px' alt='userPhoto' src={u.photos.small
                            ? u.photos.small
                            : 'https://i.pinimg.com/originals/8e/b0/fd/8eb0fdac7230089db2fa51f53e53397e.jpg'}/>
                    </NavLink>
                </div>
                {
                    u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleIsFollowing(u.id, true)
                                followAPI.unfollow(u.id).then(res => {
                                    if (res.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowing(u.id, false)
                                })
                            }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleIsFollowing(u.id, true)
                                followAPI.follow(u.id).then(res => {
                                    if (res.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowing(u.id, false)
                                })
                            }}>Follow</button>
                }
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>u.location.city</div>
                <div>u.location.country</div>
            </div>
        )
    })
    return (
        <div>
            <div>
                {
                    pages.map((p) => {
                        return (
                            <span
                                className={`${style.pages} ${props.currentPage === p ? style.currentPage : ''}`}
                                onClick={() => props.onPageChanged(p)} key={p}>
                    {p}
                    </span>
                        )
                    })
                }
            </div>
            {
                props.isFetching
                    ? <Preloader/>
                    : <div> {users} </div>
            }
        </div>
    )
}