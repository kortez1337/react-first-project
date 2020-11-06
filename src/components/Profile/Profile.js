import React from "react";
import s from "../Profile/Profile.module.css";
import MyPosts from "../Profile/MyPosts/MyPosts";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} />
        </div>
    );
};

export default Profile;
