import * as React from "react";
import { ChatMessage } from "../../modules/chat";

import "./ChatMessageBrick.scss";

type ChatMessageBrickProps = ChatMessage;

type Props = ChatMessageBrickProps;

const ChatMessageBrick: React.SFC<Props> = (props: Props) => {
    const { username, timestamp, text } = props;
    return (
        <div className="chat-message-brick">
            <img
                className="avatar"
                src="https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png"
                alt={username}/>
            <div className="content">
                <div className="byline">
                    {username}, {timestamp}
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
        </div>
    );
};

export {
    ChatMessageBrick
};
