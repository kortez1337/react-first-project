import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
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
                                        return <DialogsContainer />;
                                    }}
                                />
                                <Route
                                    path="/users"
                                    render={() => {
                                        return <UsersContainer />;
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
