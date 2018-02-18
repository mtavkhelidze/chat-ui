import * as React from "react";
import { InputUsernameBrick } from "../bricks/InputUserNameBrick";
import { ChatUIState, randomAvatar, randomUsername } from "../../modules";
import { connect, Dispatch } from "react-redux";
import {
    UserAction,
    userSetNameAction,
    UserSetPropsAction
} from "../../modules/user";
import { selectUserAvatar, selectUserName } from "../../modules/user/selectors";

interface DispatchProps {
    saveUsername: (username: string, avatar: string) => UserSetPropsAction;
}

interface StateProps {
    username: string;
    avatar: string;
}

type Props = DispatchProps & StateProps;

class InputWindowTileClass extends React.Component<Props, {}> {
    public render() {
        return (
            <InputUsernameBrick
                username={this.props.username || randomUsername()}
                onUpdate={this.onSetUsername}
            />
        );
    }

    private onSetUsername = (username: string) => {
        this.props.saveUsername(username, this.props.avatar || randomAvatar());
    }
}

const mapStateToProps = (state: ChatUIState): StateProps => ({
    username: selectUserName(state),
    avatar: selectUserAvatar(state)
});

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
    saveUsername: (username: string, avatar: string) =>
        dispatch(userSetNameAction(username, avatar))
});

const InputWindowTile = connect(mapStateToProps, mapDispatchToProps)(InputWindowTileClass);

export {
    InputWindowTile
};
