import cover from "../../img/cover.jpg";
import React from "react";
import style from "./Profile.module.css";

function Profile() {
    return (
        <div className={style.content}>
            <div>
                <img src={cover}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New Post</div>
                <div className={style.posts}>
                    <div className={style.item}>Post 1</div>
                    <div className={style.item}>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;