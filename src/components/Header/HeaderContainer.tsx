import React from 'react'
import {connect} from 'react-redux'
import {Header} from './Header'
import {AppStateType} from '../../redux/reduxStore'
import {setAuthUserData} from '../../redux/authReducer'
import axios from 'axios'

type GetUserData = {
    data: {
        id: number
        login: string
        email: string
    }
    fieldsErrors: []
    messages: string[]
    resultCode: 0 | 1
}
type HeaderContainerPropsType = MapStatePropsType & MapDispatchType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get<GetUserData>('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
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