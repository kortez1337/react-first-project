import React from "react";
import { Redirect } from "react-router-dom";

import Profile from "../Profile/Profile";
import { connect } from "react-redux";
import {
    setProfile,
    getUserStatus,
    updateUserStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userOwnId;
        }
        this.props.setProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userOwnId: state.auth.userId,
});

export default compose(
    connect(mapStateToProps, { setProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
