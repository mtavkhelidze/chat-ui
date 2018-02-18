import * as React from "react";

import { cx, ensureLineBreaks } from "../../modules";

import "./MessageTextBrick.scss";

interface Props {
    nostro: boolean;
    text: string;
}

const MessageTextBrick: React.StatelessComponent<Props> = ({ nostro, text }) => (
    <div className={cx("message-text", nostro)}>{ensureLineBreaks(text)}</div>
);

export {
    MessageTextBrick
};
