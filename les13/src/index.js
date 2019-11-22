import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app"

import {store} from "./store/store";

import * as test1 from "./actions/test1"


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById("root"));




