import React from 'react'
import {UserType} from '../../redux/usersReducer'
import style from './Users.module.css'
import {Preloader} from '../common/Preloader/Preloader'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

type UsersPropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (page: number) => void
    isFetching: boolean
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
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '1b7c72fc-c879-4275-88e5-e33388eb8130',
                                }
                            }).then(res => {
                                if (res.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            })
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '1b7c72fc-c879-4275-88e5-e33388eb8130',
                                }
                            }).then(res => {
                                if (res.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
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