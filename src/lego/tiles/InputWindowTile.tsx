import * as React from "react";
import { connect, MapDispatchToProps } from "react-redux";

import "./InputWindowTile.scss";

import {
    chatSendMessageAction,
    ChatUIState, randomAvatar,
    selectUserAvatar,
    selectUserName,
    userSetPropsAction
} from "../../modules";

import { InputUsernameBrick, InputChatMessageBrick } from "../bricks";

interface DispatchProps {
    saveUsername: typeof userSetPropsAction;
    sendMessage: typeof chatSendMessageAction;
}

interface OwnProps {
    username: string;
    avatar: string;
}

type Props = DispatchProps & OwnProps;

class InputWindowTileClass extends React.Component<Props, {}> {
    public render() {
        return (
            <div className="input-window">
                <InputUsernameBrick
                    username={this.props.username}
                    onUpdate={this.onSetUsername}
                />
                <InputChatMessageBrick onSubmit={this.onSendMessage} />
            </div>
        );
    }

    private onSetUsername = (username: string) => {
        this.props.saveUsername(username, randomAvatar());
    };

    private onSendMessage = (text: string) => {
        this.props.sendMessage(this.props.username, this.props.avatar, text);
    };
}

const mapStateToProps = (state: ChatUIState): OwnProps => ({
    username: selectUserName(state),
    avatar: selectUserAvatar(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = ({
    saveUsername: userSetPropsAction,
    sendMessage: chatSendMessageAction
});

const InputWindowTile = connect(mapStateToProps, mapDispatchToProps)(InputWindowTileClass);

export {
    InputWindowTile
};
