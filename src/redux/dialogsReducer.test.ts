import {v1} from 'uuid'
import {addMessage, DialogsPageType, dialogsReducer} from './dialogsReducer'

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
    }
})

test('correct message should be send in messages array', () => {

    const action = addMessage('Hello my dear')
    const endState = dialogsReducer(startState, action)

    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3].message).toBe('Hello my dear')
    expect(endState.messages[3].author.name).toBe('Me')
    expect(endState.dialogs.length).toBe(2)
})
