import React from 'react'
import {UserType} from '../../redux/usersReducer'
import * as axios from 'axios'

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersPropsType) {
    const getUsers =() => {
        if (props.users.length === 0) {
            axios.default.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <div>
                                <img width='200px' alt='userPhoto' src={u.photos.small
                                    ? u.photos.small
                                    : 'https://i.pinimg.com/originals/8e/b0/fd/8eb0fdac7230089db2fa51f53e53397e.jpg'} />
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