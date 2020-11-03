import React from "react";
import s from "../Profile/Profile.module.css";
import MyPosts from "../Profile/MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile_inner}>
        <div className={s.profile_img}>
          <img src="../img/user-img.jpg"></img>
        </div>
        <div>ava+desc</div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
