import React from "react";
import s from "../Dialogs/Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "../Dialogs/Message/Message";

const Dialogs = (props) => {
    let dialogsItemsElements = props.dialogs.map((el) => {
        return <DialogItem name={el.name} id={el.id} person_img={el.img} />;
    });

    let messageElements = props.messages.map((el) => {
        return <Message id={el.id} message={el.message} />;
    });

    let sendMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    };

    let changeMessageText = () => {
        let text = sendMessageElement.current.value;
        props.changeMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.title}>Ваши диалоги</div>
                {dialogsItemsElements}
            </div>
            <div className={s.messages_wrapper}>
                <div className={s.messages}>{messageElements}</div>
                <div className={s.send}>
                    <div className={s.send_text}>
                        <textarea
                            ref={sendMessageElement}
                            value={props.messageNewText}
                            onChange={changeMessageText}
                        ></textarea>
                    </div>
                    <div className={s.send_btn}>
                        <button onClick={sendMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
