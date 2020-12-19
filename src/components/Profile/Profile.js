import React from "react";
import s from "../Profile/Profile.module.css";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                isOwner={props.isOwner}
                updateUserAvatar={props.updateUserAvatar}
                updateProfileData={props.updateProfileData}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
