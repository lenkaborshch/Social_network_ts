import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {RootStateType} from './redux/state';
import { Route } from 'react-router-dom';

type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage}/>}
                />
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.dialogsPage}/>}
                />
            </div>
        </div>
    );
}

export default App;
