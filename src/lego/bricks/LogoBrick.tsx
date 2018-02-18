import * as React from "react";

import "./LogoBrick.scss";

/* tslint:disable-next-line */
const logo = require("../../assets/spotim-logo.jpg");

const LogoBrick: React.SFC = () => (
    <div className="chat-logo">
        <img className="chat-logo-image" src={logo} />
        <h3>Spot.IM Chat App</h3>
    </div>
);

export {
    LogoBrick
};
