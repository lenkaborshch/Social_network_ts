import React from 'react'
import {ProfileInfo} from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {getProfile, getStatus, ProfileType, setUserPage} from '../../redux/profileReducer'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {Preloader} from '../common/Preloader/Preloader'
import {compose} from 'redux'
import {withAuthRedirect} from '../common/hoc/WithAuthRedirect'

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '7253'
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            !this.props.profile
                ? <Preloader/>
                : <div>
                    <ProfileInfo profile={this.props.profile} status={this.props.status}/>
                    <MyPostsContainer/>
                </div>
        )
    }
}

type MapStatePropsType = {
    profile: null | ProfileType
    status: null | string
}
type MapDispatchType = {
    setUserPage: (profile: ProfileType) => void
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
    (mapStateToProps, {setUserPage, getProfile, getStatus}),
    withRouter,
    withAuthRedirect)
(ProfileContainer) as React.ComponentType
