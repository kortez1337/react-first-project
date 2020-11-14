import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App store={store} />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
