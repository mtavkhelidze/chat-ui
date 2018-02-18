import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./lego";
import { configureStore } from "./modules";
import { transportInit } from "./modules/transport";

const store = configureStore();
transportInit("spotim/chat", store.dispatch);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);
