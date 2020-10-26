import React from 'react'
import {UserType} from '../../redux/usersReducer'
import style from './Users.module.css'

type UsersPropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (page: number) => void
}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= 15; i++) { //вместо pagesCount будет 15, чтобы не показывать все страницы
        pages.push(i)
    }
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
                props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <div>
                                <img width='200px' alt='userPhoto' src={u.photos.small
                                    ? u.photos.small
                                    : 'https://i.pinimg.com/originals/8e/b0/fd/8eb0fdac7230089db2fa51f53e53397e.jpg'}/>
                            </div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>u.location.city</div>
                            <div>u.location.country</div>
                        </div>
                    )
                })
            }
        </div>
    )
}