import {authReducer, setAuthUserData, UserAuthDataType} from './authReducer'

let startState: UserAuthDataType

beforeEach(() => {
    startState = {
        id: null,
        login: null,
        email: null,
        isAuth: false,
    }
})

test('set correct user data in auth', () => {
    const id = 1111
    const login = 'lenka'
    const email = 'lenka@gmail.com'

    const action = setAuthUserData(id, login, email)
    const endState = authReducer(startState, action)

    expect(endState.id).toBe(1111)
    expect(endState.isAuth).toBe(true)
    expect(endState.login).toBe('lenka')
    expect(endState.email).toBe('lenka@gmail.com')
})