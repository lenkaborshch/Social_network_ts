import React from 'react'
import {connect} from 'react-redux'
import {Header} from './Header'
import {AppStateType} from '../../redux/reduxStore'
import {setAuthUserData} from '../../redux/authReducer'
import {authAPI} from '../../api/api'


type HeaderContainerPropsType = MapStatePropsType & MapDispatchType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authAPI.auth().then(res => {
                if (res.resultCode === 0) {
                    let {id, login, email} = res.data
                    this.props.setAuthUserData(id, login, email)
                }
            }
        )
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
    setAuthUserData: (id: number, login: string, email: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
})

export default connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {setAuthUserData})(HeaderContainer)