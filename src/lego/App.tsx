import * as React from "react";

import "./App.scss";

import { ChatWindowTile } from "./tiles";
import { InputWindowTile } from "./tiles/InputWindowTile";

const App: React.StatelessComponent<{}> = (props: {}) => (
    <div className="app">
        <div className="header">Logo</div>
        <div className="main">
            <ChatWindowTile />
        </div>
        <div className="footer">
            <InputWindowTile />
        </div>
    </div>
);

export {
    App
};
