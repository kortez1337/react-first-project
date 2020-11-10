import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

let rerenderAllTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

store.subscribe(rerenderAllTree);

rerenderAllTree(store.getState());

reportWebVitals();
