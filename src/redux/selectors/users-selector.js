import { createSelector } from "reselect";

const getUsersLowSelector = (state) => {
    return state.usersPage.users;
};

export const getUsers = createSelector(getUsersLowSelector, (users) => {
    return users.filter((u) => true);
});
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing;
};
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};
