import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth,
            };
        default:
            return state;
    }
};

export const setUserData = (userData, isAuth) => ({
    type: SET_USER_DATA,
    userData,
    isAuth,
});

export const auth = () => {
    return (dispatch) => {
        return authAPI.setUserData().then((data) => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setUserData({ userId: id, email, login }, true));
            }
        });
    };
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then((data) => {
            if (data.resultCode === 0) {
                dispatch(auth());
            } else {
                dispatch(
                    stopSubmit("login", {
                        _error: data.messages,
                    })
                );
            }
        });
    };
};
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, false));
            }
        });
    };
};

export default authReducer;
