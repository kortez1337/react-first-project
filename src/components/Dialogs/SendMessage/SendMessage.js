import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";
import s from "../SendMessage/SendMessage.module.css";

const maxLength100 = maxLength(100);
const SendMessage = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div className={s.send_text}>
                <Field
                    component={Textarea}
                    name="messageText"
                    validate={[required, maxLength100]}
                ></Field>
            </div>
            <div className={s.send_btn}>
                <button>Отправить</button>
            </div>
        </form>
    );
};

export default reduxForm({ form: "send_message" })(SendMessage);
