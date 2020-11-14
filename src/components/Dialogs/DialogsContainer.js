import React from "react";
import Dialogs from "../Dialogs/Dialogs";
import {
    updateMessageTextActionCreator,
    addMessageActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        messageNewText: state.dialogsPage.messageNewText,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        },
        changeMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
