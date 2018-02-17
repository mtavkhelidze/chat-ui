import * as React from "react";

import "./App.scss";

const App: React.StatelessComponent<{}> = (props: {}) => (
    <div className="app">
        <div className="header"/>
        <div className="main">Main</div>
        <div className="footer">Footer</div>
    </div>
);

export {
    App
};
