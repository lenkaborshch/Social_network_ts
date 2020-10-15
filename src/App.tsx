import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Header} from './components/Header/Header'
import {DialogsContainer} from "./components/Dialogs/DialogsContainer"
import { UsersContainer } from './components/Users/UsersContainer'

type AppPropsType = {}

export function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile />}
                />
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}
                />
                <Route path='/users'
                       render={() => <UsersContainer />}
                />
            </div>
        </div>
    );
}