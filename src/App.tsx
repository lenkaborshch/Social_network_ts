import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import {Navbar} from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import UsersContainer from './components/Users/UsersContainer'
import {DialogsContainer} from './components/Dialogs/DialogsContainer'


export function App() {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}
                />
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}
                />
                <Route path='/users'
                       render={() => <UsersContainer/>}
                />
            </div>
        </div>
    )
}
