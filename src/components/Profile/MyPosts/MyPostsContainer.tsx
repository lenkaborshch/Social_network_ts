import {addPost, PostType, updateNewPostText} from '../../../redux/profileReducer'
import {MyPosts} from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../redux/reduxStore'


type MapStatePropsType = {
    newPostText: string
    posts: Array<PostType>
}

type MapDispatchType = {
    updateNewPostText: (value: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
})

export const MyPostsContainer = connect<MapStatePropsType, MapDispatchType, {}, AppStateType>
(mapStateToProps, {updateNewPostText, addPost})(MyPosts)