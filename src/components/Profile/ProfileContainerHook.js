import React, { useEffect } from "react";

import Profile from "./Profile";
import { connect } from "react-redux";
import {
    setProfile,
    getUserStatus,
    updateUserStatus,
    updateUserAvatar,
    updateProfileData,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.userOwnId;
        }
        props.setProfile(userId);
        props.getUserStatus(userId);
    }, [props.match.params.userId, props.userOwnId]);

    console.log("Profile RENDER HOOK");
    return <Profile isOwner={!props.match.params.userId} {...props} />;
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userOwnId: state.auth.userId,
});

export default compose(
    connect(mapStateToProps, {
        setProfile,
        getUserStatus,
        updateUserStatus,
        updateUserAvatar,
        updateProfileData,
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
