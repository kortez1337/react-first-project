import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div className="main">
                    <div className="container">
                        <div className="main_inner">
                            <Navbar state={props.state.sitebar} />
                            <div className="app-wrapper-content">
                                <Route
                                    path="/profile"
                                    render={() => {
                                        return (
                                            <Profile
                                                state={props.state.profilePage}
                                                addPost={props.addPost}
                                                updateNewPostText={
                                                    props.updateNewPostText
                                                }
                                            />
                                        );
                                    }}
                                />
                                <Route
                                    path="/dialogs"
                                    render={() => {
                                        return (
                                            <Dialogs
                                                state={props.state.dialogsPage}
                                                addMessage={props.addMessage}
                                                updateMessageText={
                                                    props.updateMessageText
                                                }
                                            />
                                        );
                                    }}
                                />
                                <Route path="/news" component={News} />
                                <Route path="/music" component={Music} />
                                <Route path="/settings" component={Settings} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
