import * as React from "react";

import "./InputChatMessageBrick.scss";

interface OwnProps {
    onSubmit: (text: string) => void;
}

interface StateProps {
    text: string;
}

type Props = OwnProps & StateProps;

class InputChatMessageBrick extends React.Component<OwnProps, StateProps> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    public render() {
        return (
            <div className="input-chat-message">
                <div className="help">
                    <i>Enter</i> sends. <i>Shift-Enter</i> inserts new line.
                </div>
                <textarea
                    className="input-chat-message-text"
                    onChange={this.onChange}
                    onKeyDown={this.onEnter}
                    value={this.state.text}
                    rows={3}
                />
            </div>
        );
    }

    private onEnter = (e: React.KeyboardEvent<any>) => {
        if (!e.shiftKey && e.key === "Enter") {
            if (this.state.text !== "") {
                this.props.onSubmit(this.state.text);
                this.setState({ text: "" });
            }
            e.preventDefault();
        }
    };

    private onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ text: e.target.value });
    };
}

export {
    InputChatMessageBrick
};
