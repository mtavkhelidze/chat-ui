import * as React from "react";

import "../theme.scss";

import { ChatWindowTile, InputWindowTile } from "./tiles";
import { LogoBrick } from "./bricks";

const App: React.StatelessComponent<{}> = (props: {}) => (
    <div className="app">
        <div className="header">
            <LogoBrick />
        </div>
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
