import React from 'react'
import {connect} from 'react-redux'
import {Users} from './Users'
import {ActionsTypes, AppStateType} from '../../redux/reduxStore'
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC, UserType} from '../../redux/usersReducer'
import * as axios from 'axios'

type UsersContainerPropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {
    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users
            users={this.props.users}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}/>
    }
}

type MapStatePropsType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
}
type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
})
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchType => ({
    follow: (userId: number) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    },
    setTotalCount: (totalCount: number) => {
        dispatch(setTotalCountAC(totalCount))
    },
    setCurrentPage: (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    },
})

export default connect<MapStatePropsType, MapDispatchType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer)