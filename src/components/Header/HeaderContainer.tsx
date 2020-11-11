import React from 'react'
import {connect} from 'react-redux'
import {Header} from './Header'
import {AppStateType} from '../../redux/reduxStore'
import {getAuthUserData} from '../../redux/authReducer'


type HeaderContainerPropsType = MapStatePropsType & MapDispatchType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

type MapStatePropsType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}
type MapDispatchType = {
    getAuthUserData: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
})

export default connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {getAuthUserData})(HeaderContainer)