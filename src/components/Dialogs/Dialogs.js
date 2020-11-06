import React from "react";
import s from "../Dialogs/Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "../Dialogs/Message/Message";

const Dialogs = (props) => {
    let dialogsItemsElements = props.state.dialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id} person_img={el.img} />;
    });

    let messageElements = props.state.messages.map((el) => {
        return <Message id={el.id} message={el.message} />;
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.title}>Ваши диалоги</div>
                {dialogsItemsElements}
            </div>
            <div className={s.messages}>{messageElements}</div>
        </div>
    );
};

export default Dialogs;
