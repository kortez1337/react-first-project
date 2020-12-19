import React, { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatusHook = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const deactivateEditMode = () => {
        setEditMode(false);
        if (status !== props.status) {
            props.updateUserStatus(status);
        }
    };

    const onStatusTextChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <div className={s.wrapper}>
            {!editMode ? (
                <div
                    className={s.status_text}
                    onDoubleClick={() => {
                        setEditMode(true);
                    }}
                >
                    {!props.status ? "Изменить статус" : props.status}
                </div>
            ) : (
                <div className={s.status_change}>
                    <input
                        autoFocus
                        type="text"
                        onBlur={deactivateEditMode}
                        onChange={onStatusTextChange}
                        value={status}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileStatusHook;
