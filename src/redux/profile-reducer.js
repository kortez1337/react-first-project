import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const UPDATE_AVATAR = "UPDATE-AVATAR";
const UPDATE_PROFILE_DATA = "PROFILE-UPDATE-DATA";

let initialState = {
    userImg: "",
    posts: [
        { id: 1, message: "My first post", like: 2 },
        { id: 2, message: "My second post", like: 0 },
        { id: 3, message: "My third post", like: 10 },
        { id: 4, message: "My fours post", like: 60 },
    ],

    profile: null,
    status: "",
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.addPostText,
                like: 13,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.statusText,
            };
        }
        case UPDATE_AVATAR: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.newPhotos },
            };
        }
        case UPDATE_PROFILE_DATA: {
            return {
                ...state,
                profile: { ...state.profile, ...action.profile },
            };
        }

        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const updateAvatar = (newPhotos) => ({
    type: UPDATE_AVATAR,
    newPhotos,
});
export const setUserStatus = (statusText) => ({
    type: SET_USER_STATUS,
    statusText,
});
export const addPostActionCreator = (addPostText) => ({
    type: ADD_POST,
    addPostText,
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const setProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    };
};
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then((data) => {
            dispatch(setUserStatus(data));
        });
    };
};
export const updateUserStatus = (statusText) => {
    return (dispatch) => {
        profileAPI.updateStatus(statusText).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(statusText));
            }
        });
    };
};
export const updateUserAvatar = (userAvatar) => {
    return (dispatch) => {
        profileAPI.updateAvatar(userAvatar).then((data) => {
            if (data.resultCode === 0) {
                dispatch(updateAvatar(data.data.photos));
            }
        });
    };
};

const updateProfileDataSuccess = (profile) => ({
    type: UPDATE_PROFILE_DATA,
    profile,
});

export const updateProfileData = (profile) => {
    return async (dispatch) => {
        let data = await profileAPI.updateProfileData(profile);

        if (data.resultCode === 0) {
            dispatch(updateProfileDataSuccess(profile));
        } else {
            dispatch(
                stopSubmit("editProfileData", {
                    _error: data.messages[0],
                })
            );
            return Promise.reject(data.messages[0]);
        }
    };
};

export default profileReducer;
