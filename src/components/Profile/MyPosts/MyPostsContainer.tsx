import React from 'react'
import {addPostAC, updateNewPostTextAC} from '../../../redux/profileReducer'
import {MyPosts} from "./MyPosts"
import {StoreContext} from "../../../StoreContext"

type MyPostsPropsType = {}

export function MyPostsContainer(props: MyPostsPropsType) {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().profilePage

                const onChangePostText = (value: string) => {
                    store.dispatch(updateNewPostTextAC(value));
                }

                const clickAddPost = () => {
                    store.dispatch(addPostAC());
                }

                return < MyPosts newPostText={state.newPostText} posts={state.posts}
                                 updateNewPostText={onChangePostText} addPost={clickAddPost}/>
            }
            }
        </StoreContext.Consumer>
    )
}