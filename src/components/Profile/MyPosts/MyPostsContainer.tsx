import {addPost, PostType} from '../../../redux/profileReducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/reduxStore'


type MapStatePropsType = {
    posts: Array<PostType>
}

type MapDispatchType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    posts: state.profilePage.posts
})

export const MyPostsContainer = connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {addPost})(MyPosts)