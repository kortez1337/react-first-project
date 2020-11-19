import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
    changePage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleLoader,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "../Users/Users";

class UsersAPIContainer extends React.Component {
    componentDidMount = () => {
        this.props.toggleLoader(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.toggleLoader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.changePage(pageNumber);
        this.props.toggleLoader(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.toggleLoader(false);
                this.props.setUsers(response.data.items);
            });
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
                    toggleFollow={this.props.toggleFollow}
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
        isFetching: state.usersPage.isFetching,
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userId) => {
//             dispatch(toggleFollowAC(userId));
//         },

//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         changePage: (pageNumber) => {
//             dispatch(changePageAC(pageNumber));
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setTotalUsersCountAC(count));
//         },
//         toggleLoader: (isLoading) => {
//             dispatch(toggleLoaderAC(isLoading));
//         },
//     };
// };

export default connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    changePage,
    setTotalUsersCount,
    toggleLoader,
})(UsersAPIContainer);
