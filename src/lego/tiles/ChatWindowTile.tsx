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
        avatar="https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png"
        username={m.username}
        text={m.text}
        nostro={m.nostro}
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

const mapStateToProps = (state: ChatUIState): StateProps => ({
    messages: selectChatMessages(state)
});

const ChatWindowTile = connect(mapStateToProps)(ChatWindowTileClass);

export {
    ChatWindowTile
};
