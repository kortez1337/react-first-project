import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "0c061d57-55b7-4b88-895b-ff6cb367eff0",
    },
});
export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data;
            });
    },
    unFollowOnUser: (id) => {
        return instance.delete(`follow/${id}`).then((response) => {
            return response.data;
        });
    },
    followOnUser: (id) => {
        return instance.post(`follow/${id}`).then((response) => {
            return response.data;
        });
    },
};

export const profileAPI = {
    setUserProfile: (userId) => {
        return instance.get(`profile/${userId}`).then((response) => {
            return response.data;
        });
    },
    getUserStatus: (userId) => {
        return instance.get(`profile/status/${userId}`).then((responce) => {
            return responce.data;
        });
    },
    updateStatus: (statusText) => {
        return instance
            .put(`profile/status`, { status: statusText })
            .then((responce) => {
                return responce.data;
            });
    },
    updateAvatar: (file) => {
        const formData = new FormData();

        formData.append("image", file);

        return instance
            .put("profile/photo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((responce) => {
                return responce.data;
            });
    },
    updateProfileData: (profile) => {
        return instance.put("/profile", profile).then((responce) => {
            return responce.data;
        });
    },
};

export const authAPI = {
    setUserData: () => {
        return instance.get(`auth/me`).then((response) => {
            return response.data;
        });
    },
    login(email, password, rememberMe, captcha) {
        debugger;
        return instance
            .post("auth/login", { email, password, rememberMe, captcha })
            .then((response) => {
                return response.data;
            });
    },
    logout() {
        return instance.delete("auth/login").then((response) => {
            return response.data;
        });
    },
};

export const securityAPI = {
    getCaptchaURL: () => {
        return instance.get("security/get-captcha-url").then((responce) => {
            return responce.data;
        });
    },
};
