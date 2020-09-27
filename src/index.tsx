import './index.css'
import store from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'
import {RootStateType} from './redux/state'
import {HashRouter} from 'react-router-dom'


export let rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
                 addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </HashRouter>,
        document.getElementById('root'))
}
rerenderEntireThree(store.getState())
store.subscribe(rerenderEntireThree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
