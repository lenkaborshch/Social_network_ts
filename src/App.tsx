import React from 'react'
import './App.css'
import {ActionsTypes, RootStateType} from './redux/reduxStore'
import {Route} from 'react-router-dom'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import {Header} from './components/Header/Header';
import {CombinedState, Store} from 'redux'
import {ProfilePageType} from "./redux/profileReducer";
import {DialogsPageType} from './redux/dialogsReducer'
import {SidebarType} from './redux/sidebarReducer'
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>>
}

export function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile store={props.store}
                                              profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}/>}
                />
                <Route path='/dialogs'
                       render={() => <DialogsContainer store={props.store}/>}
                />
            </div>
        </div>
    );
}
