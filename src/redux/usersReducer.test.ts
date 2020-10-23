import {followAC, UsersPageType, usersReducer, setUsersAC, UserType, unfollowAC} from "./usersReducer";

let startState: UsersPageType
beforeEach(() => {
    startState = {
        users: [
            {
                id: '1',
                followed: false,
                fullName: 'Helen',
                photoUrl: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                status: 'I`m okay',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            },
            {
                id: '2',
                followed: true,
                fullName: 'Vadim',
                photoUrl: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                status: 'I`m okay too',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            },
            {
                id: '3',
                followed: false,
                fullName: 'Nik',
                photoUrl: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
                status: 'I`m okay too',
                location: {city: 'Kharkiv', country: 'Ukraine'}
            }
        ]
    }
})

test('user should be followed', () => {

    const action = followAC('3')
    const endState = usersReducer(startState, action)

    expect(endState.users[2].followed).toBe(true)
    expect(endState.users[0].followed).toBe(false)
    expect(endState.users[1].followed).toBe(true)
})

test('user should be unfollowed', () => {

    const action = unfollowAC('2')
    const endState = usersReducer(startState, action)

    expect(endState.users[1].followed).toBe(false)
    expect(endState.users[2].followed).toBe(false)
    expect(endState.users[0].followed).toBe(false)
})

test('new users should be set in common users', () => {
    let users: Array<UserType> = [
        {
            id: '4',
            followed: false,
            fullName: 'Yurii',
            photoUrl: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
            status: 'I`m okay too',
            location: {city: 'Kharkiv', country: 'Ukraine'}
        },
        {
            id: '5',
            followed: true,
            fullName: 'Nastya',
            photoUrl: 'https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg',
            status: 'I`m feeling good',
            location: {city: 'Kharkiv', country: 'Ukraine'}
        },
    ]

    const action = setUsersAC(users)
    const endState = usersReducer(startState, action)

    expect(endState.users.length).toBe(5)
    expect(endState.users[3].id).toBe('4')
    expect(endState.users[4].fullName).toBe('Nastya')
})