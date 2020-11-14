import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
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
                            <Navbar store={props.store} />
                            <div className="app-wrapper-content">
                                <Route
                                    path="/profile"
                                    render={() => {
                                        return <Profile />;
                                    }}
                                />
                                <Route
                                    path="/dialogs"
                                    render={() => {
                                        return <DialogsContainer />;
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
