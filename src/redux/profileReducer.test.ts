import {v1} from 'uuid'
import {
    addPost,
    ProfilePageType,
    profileReducer,
    setUserPage,
    ProfileType,
    setStatus
} from './profileReducer'

let startState: ProfilePageType

beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), message: 'Hey', likesCount: '20'},
            {id: v1(), message: 'How are you?', likesCount: '2'}
        ],
        profile: null,
        status: null
    }
})

test('correct message should be send in messages array', () => {

    const action = addPost('Hey hey')
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].likesCount).toBe('0')
    expect(endState.posts[0].message).toBe('Hey hey')
    expect(endState.posts[1].likesCount).toBe('20')
})

test('profile page should be changed', () => {
    const userPage: ProfileType = {
        'aboutMe': 'я круто чувак 1001%',
        'contacts': {
            'facebook': 'facebook.com',
            'website': null,
            'vk': 'vk.com/dimych',
            'twitter': 'https://twitter.com/@sdf',
            'instagram': 'instagra.com/sds',
            'youtube': null,
            'github': 'github.com',
            'mainLink': null
        },
        'lookingForAJob': true,
        'lookingForAJobDescription': 'не ищу, а дурачусь',
        'fullName': 'samurai dimych',
        'userId': 2,
        'photos': {
            'small': 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
            'large': 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'
        }
    }

    const action = setUserPage(userPage)
    const endState = profileReducer(startState, action)

    expect(endState.profile?.userId).toBe(2)
    expect(endState.profile?.aboutMe).toBe('я круто чувак 1001%')
    expect(endState.profile?.contacts.twitter).toBe('https://twitter.com/@sdf')
})

test('status should be changed', () => {
    const status = 'Hey person'

    const action = setStatus(status)
    const endState = profileReducer(startState, action)

    expect(endState.status).toBe('Hey person')
})
