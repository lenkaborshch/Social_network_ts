import React from 'react'
import {Redirect} from 'react-router-dom'
import {AppStateType} from '../../../redux/reduxStore'
import {connect} from 'react-redux'

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    let RedirectComponent: React.FC<MapStatePropsType> = (props) => {
        let {isAuth, ...restProps} = props

        return isAuth ? <WrappedComponent {...restProps as WCP}/> : <Redirect to={'/login'}/>
    }
    return connect<MapStatePropsType, {}, WCP, AppStateType>(mapStateToProps)(RedirectComponent)
}