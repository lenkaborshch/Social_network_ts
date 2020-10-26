import {
    followAC,
    UsersPageType,
    usersReducer,
    setUsersAC,
    UserType,
    unfollowAC,
    setCurrentPageAC,
    setTotalCountAC
} from './usersReducer'

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
        ],
        totalCount: 10,
        pageSize: 5,
        currentPage: 1
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

    expect(endState.users.length).toBe(2)
    expect(endState.users[0].id).toBe(4)
    expect(endState.users[1].name).toBe('Nastya')
})

test('total count should be changed', () => {

    const action = setTotalCountAC(50)
    const endState = usersReducer(startState, action)

    expect(endState.totalCount).toBe(50)
    expect(endState.currentPage).toBe(1)
    expect(endState.pageSize).toBe(5)
})

test('current page should be changed', () => {

    const action = setCurrentPageAC(3)
    const endState = usersReducer(startState, action)

    expect(endState.currentPage).toBe(3)
    expect(endState.totalCount).toBe(10)
    expect(endState.pageSize).toBe(5)
})