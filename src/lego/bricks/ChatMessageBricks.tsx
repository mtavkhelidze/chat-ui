import * as React from "react";
import { ChatMessage, cx } from "../../modules";

import "./ChatMessageBrick.scss";

import { AvatarBrick } from "./AvatarBrick";
import { BylineBrick } from "./BylineBrick";
import { MessageTextBrick } from "./MessageTextBrick";

type ChatMessageBrickProps = ChatMessage;

type Props = ChatMessageBrickProps;

const ChatMessageBrick: React.SFC<Props> = (props: Props) => {
    const { username, timestamp, text, avatar, nostro } = props;
    return (
        <div className={cx("chat-message-brick", nostro)}>
            {!nostro && <AvatarBrick src={avatar} alt={username} />}
            <div className="content">
                <BylineBrick
                    username={!nostro ? username : null}
                    timestamp={timestamp}
                />
                <MessageTextBrick nostro={nostro} text={text} />
            </div>
        </div>
    );
};

export {
    ChatMessageBrick
};
