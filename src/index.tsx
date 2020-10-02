import './index.css'
import {store} from './redux/reduxStore'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import {App} from './App'
import {RootStateType} from './redux/reduxStore'
import {HashRouter} from 'react-router-dom'


export const rerenderEntireThree = (state: RootStateType) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </HashRouter>,
        document.getElementById('root'))
}

rerenderEntireThree(store.getState())
store.subscribe(() => {
    const state = store.getState()
    rerenderEntireThree(state)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
