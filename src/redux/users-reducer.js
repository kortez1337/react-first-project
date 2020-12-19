import { usersAPI } from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const CHANGE_PAGE = "CHANGE-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_LOADER = "TOGGLE-LOADER";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 13,
    currentPage: 1,
    isFetching: false,
    isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed };
                    }
                    return u;
                }),
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            };
        }
        case CHANGE_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber,
            };
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count,
            };
        }
        case TOGGLE_LOADER: {
            return {
                ...state,
                isFetching: action.isLoading,
            };
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter((id) => id != action.userId),
            };
        }
        default:
            return state;
    }
};
export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const toggleFollowingProgress = (isFollowing, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFollowing,
    userId,
});
export const toggleLoader = (isLoading) => ({
    type: TOGGLE_LOADER,
    isLoading,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const changePage = (pageNumber) => ({ type: CHANGE_PAGE, pageNumber });
export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    count,
});

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleLoader(true));

        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleLoader(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    };
};

export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleLoader(true));
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.followOnUser(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowingProgress(false, id));

                dispatch(toggleLoader(false));

                dispatch(toggleFollow(id));
            }
        });
    };
};
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleLoader(true));
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.unFollowOnUser(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(toggleFollowingProgress(false, id));

                dispatch(toggleLoader(false));

                dispatch(toggleFollow(id));
            }
        });
    };
};
export default usersReducer;
