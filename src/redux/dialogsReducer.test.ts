import {v1} from "uuid"
import { addMessageAC, dialogsReducer, DialogsPageType, updateNewMessageTextAC } from "./dialogsReducer"

let startState: DialogsPageType

beforeEach(() => {
    startState = {
        dialogs: [
            {id: v1(), name: 'Vadim'},
            {id: v1(), name: 'Mama'},
        ],
        messages: [
            {
                id: v1(),
                message: 'Hey',
                author: {
                    name: 'Vadim',
                    src: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png'
                }
            },
            {
                id: v1(),
                message: 'How are you?',
                author: {
                    name: 'Me',
                    src: 'https://volyn.tabloyid.com/upload/news/1/2019-06/155980298916/1_worlds-most-beautiful-cats-1-57fb53b6755fc__700.jpg'
                }
            },
            {
                id: v1(),
                message: 'Good luck',
                author: {
                    name: 'Vadim',
                    src: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png'
                }
            },
        ],
        newMessageText: 'Hello my dear',
    }
})

test('correct message should be send in messages array', () => {

    const action = addMessageAC()
    const endState = dialogsReducer(startState, action)

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].message).toBe('Hello my dear')
    expect(endState.messages[3].author.name).toBe('Me')
    expect(endState.dialogs.length).toBe(2)
})

test('new message should be update', () => {

    const action = updateNewMessageTextAC('Hello my friend!')
    const endState = dialogsReducer(startState, action)

    expect(endState.newMessageText).toBe('Hello my friend!')
    expect(endState.messages.length).toBe(3)
    expect(endState.dialogs.length).toBe(2)
})
