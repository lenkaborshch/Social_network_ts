import React from 'react'
import {connect} from 'react-redux'
import {Users} from './Users'
import {AppStateType} from '../../redux/reduxStore'
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    unfollow,
    toggleIsFetching,
    UserType
} from '../../redux/usersReducer'
import {usersAPI} from '../../api/api'

type UsersContainerPropsType = MapStatePropsType & MapDispatchType


class UsersContainer extends React.Component<UsersContainerPropsType, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.items)
                this.props.setTotalCount(res.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, page)
            .then((res) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.items)
            })
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
                isFetching={this.props.isFetching}/>
        )
    }
}

type MapStatePropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

export default connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {follow, unfollow, setUsers, setTotalCount, setCurrentPage, toggleIsFetching})(UsersContainer)