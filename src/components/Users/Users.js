import React from "react";
import s from "../Users/Users.module.css";
import defaultUserImg from "../../assets/img/defaultUserImg.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.pagination}>
                {pages.map((p) => {
                    return (
                        <div
                            className={
                                props.currentPage == p
                                    ? `${s.pagination_item} ${s.pagination_item__active}`
                                    : `${s.pagination_item}`
                            }
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                        >
                            {p}
                        </div>
                    );
                })}
            </div>
            <div className={s.all_users}>
                {props.users.map((u) => {
                    return (
                        <div key={u.id} className={s.user_wrapper}>
                            <div className={s.left_side}>
                                <NavLink to={"/profile/" + u.id}>
                                    <div className={s.photo}>
                                        <img
                                            src={
                                                u.photos.small != null
                                                    ? u.photos.small
                                                    : defaultUserImg
                                            }
                                            alt=""
                                        />
                                    </div>
                                </NavLink>
                                <div className={s.follow_btn}>
                                    <button
                                        onClick={() => {
                                            props.toggleFollow(u.id);
                                        }}
                                    >
                                        {u.followed ? "Unfollow" : "Follow"}
                                    </button>
                                </div>
                            </div>
                            <div className={s.right_side}>
                                <div className={s.name_status}>
                                    <div className={s.name}>{u.name}</div>
                                    <div className={s.status}>{u.status}</div>
                                </div>
                                <div className={s.location}>
                                    <div className={s.country}>
                                        {"u.location.country"}
                                    </div>
                                    <div className={s.city}>
                                        {"u.location.city"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Users;
