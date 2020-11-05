import React from "react";
import s from "../Profile/Profile.module.css";
import MyPosts from "../Profile/MyPosts/MyPosts";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    );
};

export default Profile;
