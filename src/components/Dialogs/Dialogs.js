import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Dialogs/Dialogs.module.css";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
    let DialogsItemsDatas = [
        { id: 1, name: "Андрей" },
        { id: 2, name: "Гига" },
        { id: 3, name: "Дима" },
        { id: 4, name: "Славик" },
        { id: 5, name: "Макс" },
        { id: 6, name: "Олег" },
        { id: 7, name: "Кексик" },
    ];

    let MessagesDatas = [
        { id: 1, message: "Привет" },
        { id: 2, message: "Шо ты?" },
        { id: 3, message: "Шамарнемся?" },
        { id: 4, message: "Чи не хош?" },
    ];

    let DialogsItemsElements = DialogsItemsDatas.map((el) => {
        return <DialogItem name={el.name} id={el.id} />;
    });

    let MessageElements = MessagesDatas.map((el) => {
        return <Message id={el.id} message={el.message} />;
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>{DialogsItemsElements}</div>
            <div className={s.messages}>{MessageElements}</div>
        </div>
    );
};

export default Dialogs;
