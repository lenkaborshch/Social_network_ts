import React from "react";
import {v1} from "uuid";
import { UserType } from "../../redux/usersReducer";

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersPropsType) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                followed: false,
                fullName: 'Helen',
                photoUrl: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                status: 'I`m okay',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            },
            {
                id: v1(),
                followed: true,
                fullName: 'Vadim',
                photoUrl: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                status: 'I`m okay too',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            },
            {
                id: v1(),
                followed: false,
                fullName: 'Nik',
                photoUrl: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                status: 'I`m okay too',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            }
        ])
    }
    return (
        <div>
            {
                props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <div><img width='200px' src={u.photoUrl} alt='photo user'/></div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}