import {v1} from "uuid"
import {addPostAC, ProfilePageType, profileReducer, updateNewPostTextAC} from "./profileReducer";

let startState: ProfilePageType

beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), message: 'Hey', likesCount: '20'},
            {id: v1(), message: 'How are you?', likesCount: '2'}
        ],
        newPostText: 'Hey hey'
    }
})

test('correct message should be send in messages array', () => {

    const action = addPostAC()
    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[0].likesCount).toBe('0')
    expect(endState.posts[0].message).toBe('Hey hey')
    expect(endState.posts[1].likesCount).toBe('20')
})

test('new message should be update', () => {

    const action = updateNewPostTextAC('Hello my world!')
    const endState = profileReducer(startState, action)

    expect(endState.newPostText).toBe('Hello my world!')
    expect(endState.posts.length).toBe(2)
})
