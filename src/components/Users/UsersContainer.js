import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
    getUsers,
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPageSize,
    getTotalUsersCount,
} from "../../redux/selectors/users-selector";
import {
    changePage,
    toggleFollow,
    requestUsers,
    follow,
    unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "../Users/Users";

class UsersAPIContainer extends React.Component {
    componentDidMount = () => {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.changePage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {
        console.log("USERS RENDER");

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    onPageChanged={this.onPageChanged}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    isFollowing={this.props.isFollowing}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFollowing: getIsFollowing(state),
        isFetching: getIsFetching(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        toggleFollow,
        changePage,
        requestUsers,
        follow,
        unfollow,
    }),
    withAuthRedirect
)(UsersAPIContainer);
