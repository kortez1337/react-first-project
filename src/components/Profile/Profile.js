import React from "react";
import s from "../Profile/Profile.module.css";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
