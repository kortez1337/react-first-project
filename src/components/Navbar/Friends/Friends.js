import React from "react";
import s from "../Friends/Friends.module.css";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
    return (
        <div className={s.friends_wrapper}>
            <div className={s.friends_title}>
                <NavLink to="/friends" className={s.friends_title_link}>
                    Мои друзья
                </NavLink>
            </div>
            <div className={s.topfriends}>
                <ul>
                    <li>
                        <NavLink to="/friends/1">
                            <div className={s.friend_img}>
                                <img
                                    src={props.friends[0].img}
                                    alt="friend_img"
                                />
                            </div>
                            <div className={s.friend_name}>
                                {props.friends[0].name}
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/friends/1">
                            <div className={s.friend_img}>
                                <img
                                    src={props.friends[1].img}
                                    alt="friend_img"
                                />
                            </div>
                            <div className={s.friend_name}>
                                {props.friends[1].name}
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/friends/1">
                            <div className={s.friend_img}>
                                <img
                                    src={props.friends[2].img}
                                    alt="friend_img"
                                />
                            </div>
                            <div className={s.friend_name}>
                                {props.friends[2].name}
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Friends;
