import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (addPostText) => {
            dispatch(addPostActionCreator(addPostText));
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);
