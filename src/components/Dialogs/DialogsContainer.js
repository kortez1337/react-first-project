import React from "react";
import Dialogs from "../Dialogs/Dialogs";
import {
    updateMessageTextActionCreator,
    addMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageNewText: state.dialogsPage.messageNewText,
        isAuth: state.auth.isAuth,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageText) => {
            dispatch(addMessageActionCreator(messageText));
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
