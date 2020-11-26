import React from "react";
import s from "../Dialogs/Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "../Dialogs/Message/Message";
import { Redirect } from "react-router-dom";
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {
    let dialogsItemsElements = props.dialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id} person_img={el.img} />;
    });

    let messageElements = props.messages.map((el) => {
        return <Message id={el.id} message={el.message} />;
    });

    let sendMessage = (formData) => {
        props.sendMessage(formData.messageText);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.title}>Ваши диалоги</div>
                {dialogsItemsElements}
            </div>
            <div className={s.messages_wrapper}>
                <div className={s.messages}>{messageElements}</div>
                <SendMessage onSubmit={sendMessage} />
            </div>
        </div>
    );
};

export default Dialogs;
