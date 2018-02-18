import { NetworkMessage } from "../network";

export const CHAT_APPEND_MESSAGE = "@chat/append-message";
export const CHAT_SEND_MESSAGE = "@chat/send-message";

export interface ChatMessage extends NetworkMessage {
    timestamp: number;
    nostro: boolean;
}

export interface ChatAppendMessageAction {
    type: typeof CHAT_APPEND_MESSAGE;
    message: ChatMessage;
}

export interface ChatSendMessageAction {
    type: typeof CHAT_SEND_MESSAGE;
    message: NetworkMessage;
}

export type ChatAction = ChatAppendMessageAction | ChatSendMessageAction;

const chatAppendMessageAction = (msg: NetworkMessage): ChatAppendMessageAction => {
    const { avatar, username, text } = msg;
    return ({
        type: CHAT_APPEND_MESSAGE,
        message: {
            timestamp: Date.now(),
            avatar,
            username,
            text,
            nostro: false
        }
    });
};

const chatSendMessageAction = (
    username: string, avatar: string, text: string
): ChatSendMessageAction => ({
    type: CHAT_SEND_MESSAGE,
    message: {
        avatar,
        username,
        text
    }
});

export {
    chatAppendMessageAction,
    chatSendMessageAction
};
