import React from 'react'
import {connect} from 'react-redux'
import {Users} from './Users'
import {AppStateType} from '../../redux/reduxStore'
import {follow, getUsers, setCurrentPage, toggleIsFollowing, unfollow, UserType} from '../../redux/usersReducer'

type UsersContainerPropsType = MapStatePropsType & MapDispatchType


class UsersContainer extends React.Component<UsersContainerPropsType, {}> {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(this.props.pageSize, page)
    }

    render() {
        return (
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowing={this.props.toggleIsFollowing}
            />
        )
    }
}

type MapStatePropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFollowing: (userId: number, isFetching: boolean) => void
    getUsers: (pageSize: number, currentPage: number) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
})

export default connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowing, getUsers})(UsersContainer)