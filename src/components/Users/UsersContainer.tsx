import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionsTypes, AppStateType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";


type MapStatePropsType = {
   users: Array<UserType>
}

type MapDispatchType = {
    setUsers: (users: Array<UserType>) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users
})
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchType => ({
    follow: (userId: string) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId: string) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    }
})

export const UsersContainer = connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, mapDispatchToProps)(Users)