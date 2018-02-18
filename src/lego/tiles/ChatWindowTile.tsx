import * as React from "react";
import { ChatMessage, ChatUIState } from "../../modules";
import { selectChatMessages } from "../../modules/chat/selectors";
import { connect } from "react-redux";
import { ChatMessageBrick } from "../bricks";

import "./ChatWindowTile.scss";

interface StateProps {
    messages: ChatMessage[];
}

type Props = StateProps;

const makeChatMessageBrick = (m: ChatMessage, i: number) => (
    <ChatMessageBrick
        key={i}
        timestamp={m.timestamp}
        avatar={m.avatar}
        username={m.username}
        text={m.text}
        nostro={m.nostro}
    />
);

class ChatWindowTileClass extends React.Component<Props, {}> {
    private messagesEnd: any;

    public componentDidMount() {
        this.scrollToBottom();
    }

    public componentDidUpdate() {
        this.scrollToBottom();
    }

    public render() {
        const list = this.props.messages.map(makeChatMessageBrick);
        return (
            <div className="chat-window-tile">
                {list}
                <div style={{ float: "left", clear: "both" }}
                     ref={el => {
                         this.messagesEnd = el;
                     }}>
                </div>
            </div>
        );
    }

    private scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };
}

const mapStateToProps = (state: ChatUIState): StateProps => ({
    messages: selectChatMessages(state)
});

const ChatWindowTile = connect(mapStateToProps)(ChatWindowTileClass);

export {
    ChatWindowTile
};
