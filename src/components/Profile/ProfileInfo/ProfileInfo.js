import React, { useState } from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import profileHeaderImg from "../../../assets/img/user-img.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";
import defaultUserImg from "../../../assets/img/defaultUserImg.png";
import ProfileEditForm from "./ProfileEditForm/ProfileEditForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />;
    }

    const onAvatarChange = (e) => {
        if (e.target.files.length > 0) {
            props.updateUserAvatar(e.target.files[0]);
        }
    };

    const onSubmit = (data) => {
        props.updateProfileData(data).then(() => {
            setEditMode(false);
        });
    };
    return (
        <div className={s.wrapper}>
            <div className={s.head_img}>
                <img src={profileHeaderImg}></img>
            </div>
            <div className={s.content}>
                <div className={s.left_side}>
                    <div className={s.avatar}>
                        <img
                            src={props.profile.photos.large || defaultUserImg}
                            alt="ava"
                        />
                        {props.isOwner ? (
                            <div className={s.change_ava}>
                                <input type="file" onChange={onAvatarChange} />
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className={s.profile_data}>
                    {editMode ? (
                        <ProfileEditForm
                            onSubmit={onSubmit}
                            setEditMode={setEditMode}
                            initialValues={props.profile}
                            profile={props.profile}
                        />
                    ) : (
                        <ProfileInfoData {...props} setEditMode={setEditMode} />
                    )}
                </div>
            </div>
        </div>
    );
};

const ProfileInfoData = (props) => {
    return (
        <div className={s.right_side}>
            <div className={s.fullname}>{props.profile.fullName}</div>
            <ProfileStatusHook
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <div className={s.about_me}>
                Обо мне:
                {props.profile.aboutMe}
            </div>
            {props.profile.lookingForAJob ? (
                <div className={s.find_job}>
                    В поиске работы
                    <div className={s.find_job_text}>
                        Комментарий к поиску работы:{" "}
                        {props.profile.lookingForAJobDescription}
                    </div>
                </div>
            ) : null}
            <div className={s.contacts}>
                <div className={s.contacts_title}>Мои контакты</div>
                <ul className={s.contacts_list}>
                    <li className={s.contacts_item}>
                        GitHub: {props.profile.contacts.github}
                    </li>
                    <li className={s.contacts_item}>
                        Vk: {props.profile.contacts.vk}
                    </li>
                    <li className={s.contacts_item}>
                        Facebook: {props.profile.contacts.facebook}
                    </li>
                    <li className={s.contacts_item}>
                        Twitter: {props.profile.contacts.twitter}
                    </li>
                    <li className={s.contacts_item}>
                        website: {props.profile.contacts.website}
                    </li>
                    <li className={s.contacts_item}>
                        youtube: {props.profile.contacts.youtube}
                    </li>
                    <li className={s.contacts_item}>
                        Главная страница:
                        {props.profile.contacts.mainLink}
                    </li>
                </ul>
                {props.isOwner ? (
                    <button
                        onClick={() => {
                            props.setEditMode(true);
                        }}
                    >
                        Изменить данные
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default ProfileInfo;
