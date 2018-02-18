import * as React from "react";

import { cx, tsString } from "../../modules";

import "./BylineBrick.scss";

interface Props {
    username: string | null;
    timestamp: number;
}

const BylineBrick: React.StatelessComponent<Props> = ({ username, timestamp }) => (
    <div className="byline">
        {username && (
            <span><span className="byline-username">{username}</span>,&nbsp;</span>
        )}
        <span className={cx("byline-timestamp", !username)}>
            {tsString(timestamp)}
            </span>
    </div>
);

export {
    BylineBrick
};
