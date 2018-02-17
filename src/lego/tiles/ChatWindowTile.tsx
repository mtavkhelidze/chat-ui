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
    />
);

class ChatWindowTileClass extends React.Component<Props, {}> {
    public render() {
        const list = this.props.messages.map(makeChatMessageBrick);
        return (
            <div className="chat-window-tile">
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
                {list}
            </div>
        );
    }
}

const mapStateToProps = (state: ChatUIState) => ({
    messages: selectChatMessages(state)
});

const ChatWindowTile = connect(mapStateToProps)(ChatWindowTileClass);

export {
    ChatWindowTile
};
