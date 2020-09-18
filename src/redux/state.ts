import {v1} from 'uuid';
import {rerenderEntireThree} from '../render';

export type PostType = {
    id: string
    message: string
    likesCount: string
}

export type DialogType = {
    id: string
    name: string
}

export type AuthorMessage = {
    name: string
    src: string
}

export type MessageType = {
    id: string
    message: string
    author: AuthorMessage
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type FriendType = {
    id: string
    name: string
    src: string
}

export type SidebarType = {
    friends: Array<FriendType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hey', likesCount: '20'},
            {id: v1(), message: 'How are you?', likesCount: '2'}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Vadim'},
            {id: v1(), name: 'Mama'},
            {id: v1(), name: 'Papa'},
            {id: v1(), name: 'Yurii'},
            {id: v1(), name: 'Nik'},
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
        newMessageText: ''
    },
    sidebar: {
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
}

export const addPost = () => {
    let newPost = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: '0'
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireThree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: v1(),
        message: state.dialogsPage.newMessageText,
        author: {
            name: 'Vadim',
            src: 'https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png'
        }
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireThree(state);
}

export const updateNewMessageText = (newMessageText: string) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireThree(state);
}

export default state;