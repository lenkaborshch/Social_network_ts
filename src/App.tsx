import React from 'react'
import './App.css'
import {ActionsTypes, RootStateType} from './redux/state'
import {Route} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './components/Profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

export function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}/>}
                />
                <Route path='/dialogs'
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                              dispatch={props.dispatch}/>}
                />
            </div>
        </div>
    );
}
