import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
    changePage,
    toggleFollow,
    getUsers,
    follow,
    unfollow,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "../Users/Users";

class UsersAPIContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.changePage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
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
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFollowing: state.usersPage.isFollowing,
        isFetching: state.usersPage.isFetching,
    };
};

export default compose(
    connect(mapStateToProps, {
        toggleFollow,
        changePage,
        getUsers,
        follow,
        unfollow,
    }),
    withAuthRedirect
)(UsersAPIContainer);
