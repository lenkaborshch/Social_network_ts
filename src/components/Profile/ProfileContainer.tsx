import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {getProfile, ProfileType, setUserPage} from '../../redux/profileReducer'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {Preloader} from '../common/Preloader/Preloader'

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '7253'
        this.props.getProfile(userId)
    }

    render() {
        return (
            !this.props.profile
                ? <Preloader/>
                : <div>
                    <ProfileInfo profile={this.props.profile}/>
                    <MyPostsContainer/>
                </div>
        )
    }
}

type MapStatePropsType = {
    profile: null | ProfileType
}
type MapDispatchType = {
    setUserPage: (profile: ProfileType) => void
    getProfile: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let ComponentWithRouter = withRouter(ProfileContainer)

export default connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {setUserPage, getProfile})(ComponentWithRouter)