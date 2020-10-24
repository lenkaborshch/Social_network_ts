import {followAC, UsersPageType, usersReducer, setUsersAC, UserType, unfollowAC} from './usersReducer'

let startState: UsersPageType
beforeEach(() => {
    startState = {
        users: [
            {
                name: 'Helen',
                id: 1,
                uniqueUrlName: null,
                photos: {
                    small: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                    large: null
                },
                status: 'I`m okay',
                followed: false,
            },
            {
                name: 'Vadim',
                id: 2,
                uniqueUrlName: null,
                photos: {
                    small: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                    large: null
                },
                status: 'I`m okay too',
                followed: true,
            },
            {
                name: 'Nik',
                id: 3,
                uniqueUrlName: null,
                photos: {
                    small: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                    large: null
                },
                status: 'I`m okay too',
                followed: false,
            }
        ]
    }
})

test('user should be followed', () => {

    const action = followAC(3)
    const endState = usersReducer(startState, action)

    expect(endState.users[2].followed).toBe(true)
    expect(endState.users[0].followed).toBe(false)
    expect(endState.users[1].followed).toBe(true)
})

test('user should be unfollowed', () => {

    const action = unfollowAC(2)
    const endState = usersReducer(startState, action)

    expect(endState.users[1].followed).toBe(false)
    expect(endState.users[2].followed).toBe(false)
    expect(endState.users[0].followed).toBe(false)
})

test('new users should be set in common users', () => {
    let users: Array<UserType> = [
        {
            name: 'Yurii',
            id: 4,
            uniqueUrlName: null,
            photos: {
                small: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                large: null
            },
            status: 'I`m perfect',
            followed: false,
        },
        {
            name: 'Nastya',
            id: 5,
            uniqueUrlName: null,
            photos: {
                small: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                large: null
            },
            status: 'I`m good',
            followed: true,
        },
    ]

    const action = setUsersAC(users)
    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(5)
    expect(endState.users[3].id).toBe(4)
    expect(endState.users[4].name).toBe('Nastya')
})