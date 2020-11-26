import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        });
    };
    activeEditMode = () => {
        this.setState({
            editMode: true,
        });
    };
    deActiveEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateUserStatus(this.state.status);
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }
    render() {
        return (
            <div className={s.wrapper}>
                {!this.state.editMode ? (
                    <div
                        className={s.status_text}
                        onDoubleClick={this.activeEditMode}
                    >
                        {!this.props.status
                            ? "Изменить статус"
                            : this.props.status}
                    </div>
                ) : (
                    <div className={s.status_change}>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus
                            onBlur={this.deActiveEditMode}
                            type="text"
                            value={this.state.status}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
