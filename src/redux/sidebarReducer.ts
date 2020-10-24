import {ActionsTypes} from './reduxStore'
import {v1} from 'uuid'

export type FriendType = {
    id: string
    name: string
    src: string
}

const initialState = {
    friends: [
        {
            id: v1(),
            name: 'Vadim',
            src: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png'
        },
        {
            id: v1(),
            name: 'Busya',
            src: 'https://i.pinimg.com/originals/1c/ba/1e/1cba1e5e40356f6edb0235c8a09a07d5.jpg'
        },
        {
            id: v1(),
            name: 'Freud',
            src: 'https://pbs.twimg.com/profile_images/1173161429266030592/lJCNA_JC_400x400.jpg'
        }
    ]
}

export type SidebarType = typeof initialState

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {
    return state
}