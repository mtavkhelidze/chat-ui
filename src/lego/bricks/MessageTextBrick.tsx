import * as React from "react";

import { cx } from "../../modules";

import "./MessageTextBrick.scss";

interface Props {
    nostro: boolean;
    text: string;
}

const MessageTextBrick: React.StatelessComponent<Props> = ({ nostro, text }) => (
    <div className={cx("message-text", nostro)}>{text}</div>
);

export {
    MessageTextBrick
};
