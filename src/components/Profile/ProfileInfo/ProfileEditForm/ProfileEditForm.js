import React from "react";
import { Field, reduxForm, handleSubmit } from "redux-form";
import { Input } from "../../../common/FormControls/FormControls";
import s from "../ProfileEditForm/ProfileEditForm.module.css";

const ProfileEditForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error ? (
                <div className={s.error_all_form}>{props.error}</div>
            ) : null}
            <div className={s.fullname}>
                <Field
                    placeholder="Fullname"
                    name="fullName"
                    component={Input}
                    type="text"
                />
            </div>

            <div className={s.find_job}>
                В поиске работы?
                <Field
                    name="lookingForAJob"
                    component={Input}
                    type="checkbox"
                />
            </div>
            <div className={s.find_job_desc}>
                <Field
                    placeholder="Комментарий к поиску работы"
                    name="lookingForAJobDescription"
                    component={Input}
                    type="text"
                />
            </div>
            <div className={s.find_job_desc}>
                <Field
                    placeholder="Обо мне"
                    name="aboutMe"
                    component={Input}
                    type="text"
                />
            </div>
            <div className={s.contacts}>
                <b>Contacts:</b>
                {Object.keys(props.profile.contacts).map((key) => {
                    // debugger;
                    return (
                        <Field
                            key={key}
                            placeholder={"contacts." + key}
                            name={"contacts." + key}
                            component={Input}
                            type="text"
                        />
                    );
                })}
            </div>
            <button>Сохранить</button>
            <div
                onClick={() => {
                    props.setEditMode(false);
                }}
                className={s.back_to_profile}
            >
                Вернуться назад
            </div>
        </form>
    );
};

export default reduxForm({ form: "editProfileData" })(ProfileEditForm);
