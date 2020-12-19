import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainerHook";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initApp } from "./redux/app-reducer.js";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
    componentDidMount() {
        this.props.initApp();
    }
    render() {
        {
            if (!this.props.initialized) {
                return <Preloader />;
            }
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <div className="main">
                        <div className="container">
                            <div className="main_inner">
                                <Navbar />
                                <div className="app-wrapper-content">
                                    <Route
                                        path="/profile/:userId?"
                                        render={() => {
                                            return <ProfileContainer />;
                                        }}
                                    />
                                    <Route
                                        path="/dialogs"
                                        render={() => {
                                            return (
                                                <Suspense
                                                    fallback={<Preloader />}
                                                >
                                                    <DialogsContainer />
                                                </Suspense>
                                            );
                                        }}
                                    />
                                    <Route
                                        path="/users"
                                        render={() => {
                                            return <UsersContainer />;
                                        }}
                                    />
                                    <Route
                                        path="/login"
                                        render={() => {
                                            return <Login />;
                                        }}
                                    ></Route>
                                    <Route path="/news" component={News} />
                                    <Route path="/music" component={Music} />
                                    <Route
                                        path="/settings"
                                        component={Settings}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initApp })(App);
