import React from "react";
import s from "../AddPost/AddPost.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormControls/FormControls";

const maxLength10 = maxLength(10);

const AddPost = (props) => {
    return (
        <form className={s.post_add} onSubmit={props.handleSubmit}>
            <div className={s.post_add_text}>
                <Field
                    component={Textarea}
                    placeholder="Что расскажешь, братан?"
                    name="addPostText"
                    validate={[required, maxLength10]}
                />
            </div>
            <div className={s.post_add_btn}>
                <button>Опубликовать</button>
            </div>
        </form>
    );
};

export default reduxForm({ form: "add_post" })(AddPost);
