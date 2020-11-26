import React from "react";
import s from "../FormControls/FormControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
    const error = meta.touched && meta.error;

    return (
        <div className={error && s.error}>
            <textarea {...input} {...props}></textarea>
            {error && <span>{meta.error}</span>}
        </div>
    );
};
export const Input = ({ input, meta, ...props }) => {
    const error = meta.touched && meta.error;

    return (
        <div className={error && s.error}>
            <input {...input} {...props}></input>
            {error && <span>{meta.error}</span>}
        </div>
    );
};
