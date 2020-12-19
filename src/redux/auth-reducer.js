import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false,
    captchaURL: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: action.isAuth,
            };
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaURL: action.url,
            };
        }
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

export const login = (email, password, rememberMe, loginCaptcha) => {
    return (dispatch) => {
        authAPI
            .login(email, password, rememberMe, loginCaptcha)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(auth());
                } else {
                    if (data.resultCode === 10) {
                        dispatch(getCaptchaURL());
                    }
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

const setCaptchaURL = (url) => ({ type: SET_CAPTCHA_URL, url });

export const getCaptchaURL = () => (dispatch) => {
    securityAPI.getCaptchaURL().then((data) => {
        dispatch(setCaptchaURL(data.url));
    });
};

export default authReducer;
