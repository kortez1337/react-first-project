import React from "react";
import { NavLink } from "react-router-dom";
import s from "../DialogItem/DialogItem.module.css";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.wrapper}>
            <NavLink to={path} className={s.dialog_item_link}>
                <div className={s.dialog_photo}>
                    <img src={props.person_img} alt="dialog-photo" />
                </div>
                <div className={s.dialog_name}>{props.name}</div>
            </NavLink>
        </div>
    );
};

export default DialogItem;
