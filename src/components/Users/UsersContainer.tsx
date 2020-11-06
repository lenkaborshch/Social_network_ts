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
import axios from 'axios'

type UsersContainerPropsType = MapStatePropsType & MapDispatchType
type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

class UsersContainer extends React.Component<UsersContainerPropsType, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '1b7c72fc-c879-4275-88e5-e33388eb8130',
            }
        })
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)
        axios.get<GetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '1b7c72fc-c879-4275-88e5-e33388eb8130',
            }
        })
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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