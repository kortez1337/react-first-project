const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const CHANGE_PAGE = "CHANGE-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_LOADER = "TOGGLE_LOADER";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 13,
    currentPage: 1,
    isFetching: false,
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
        default:
            return state;
    }
};
export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
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

export default usersReducer;
