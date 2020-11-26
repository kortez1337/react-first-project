import React from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import profileHeaderImg from "../../../assets/img/user-img.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <div className={s.profile_info}>
            <div className={s.head_img}>
                <img src={profileHeaderImg}></img>
            </div>
            <div className={s.content}>
                <div className={s.left_side}>
                    <div className={s.avatar}>
                        <img src={props.profile.photos.large} alt="ava" />
                    </div>
                </div>
                <div className={s.right_side}>
                    <div className={s.fullname}>{props.profile.fullName}</div>
                    <ProfileStatus
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                    />
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
