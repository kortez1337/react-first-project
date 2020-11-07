import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
    addMessage,
    addPost,
    updateMessageText,
    updateNewPostText,
} from "../src/redux/state";

let rerenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPostText={updateNewPostText}
                updateMessageText={updateMessageText}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

subscribe(rerenderAllTree);

rerenderAllTree();

reportWebVitals();
