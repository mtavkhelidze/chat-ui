import * as React from "react";

import "./InputUserNameBrick.scss";

interface OwnProps {
    onUpdate: (text: string) => void;
    username: string;
}

interface StateProps {
    text: string;
}

type Props = OwnProps & StateProps;

class InputUsernameBrick extends React.Component<OwnProps, StateProps> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: props.username
        };
    }

    public render() {
        const disabled = this.state.text === this.props.username;
        return (
            <div className="input-username">
                <input type="text"
                       className="form-control"
                       value={this.state.text}
                       placeholder={this.state.text && this.props.username}
                       onChange={this.onChange}
                />
                <span className="input-group-btn">
                <input
                    disabled={disabled}
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={this.onClick}
                    value="Set username"
                />
                </span>
            </div>
        );
    }

    private onClick = () =>
        this.props.onUpdate(this.state.text || this.props.username);

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({ text: e.target.value });
}

export {
    InputUsernameBrick
};
