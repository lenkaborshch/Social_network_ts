import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {MyPostsContainer} from './MyPosts/MyPostsContainer'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/reduxStore'
import {setUserPage, ProfileType} from '../../redux/profileReducer'
import axios from 'axios'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {Preloader} from '../common/Preloader/Preloader'

type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '7253'
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserPage(response.data)
            })
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
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let ComponentWithRouter = withRouter(ProfileContainer)

export default connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {setUserPage})(ComponentWithRouter)