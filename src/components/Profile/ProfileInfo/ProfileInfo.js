import React from "react";
import Profile from "../Profile";
import s from "../ProfileInfo/ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.profile_info}>
            <div className={s.head_img}>
                <img src="../img/user-img.jpg"></img>
            </div>
            <div className={s.content}>ava+desc</div>
        </div>
    );
};

export default ProfileInfo;
