import * as React from "react";

import "./App.scss";
import { ChatWindowTile } from "./tiles";

const App: React.StatelessComponent<{}> = (props: {}) => (
    <div className="app">
        <div className="header">Logo</div>
        <div className="main">
            <ChatWindowTile />
        </div>
        <div className="footer">Input</div>
    </div>
);

export {
    App
};
