import { NetworkMessage } from "../core";

export const CHAT_APPEND_MESSAGE = "@chat/append-message";

export interface ChatMessage extends NetworkMessage {
    timestamp: number;
}

export interface ChatAppendMessageAction {
    type: typeof CHAT_APPEND_MESSAGE;
    message: ChatMessage;
}

export type ChatAction = ChatAppendMessageAction;

const chatAppendMessageAction = (msg: NetworkMessage): ChatAppendMessageAction => {
    const { avatar, username, text } = msg;
    return ({
        type: CHAT_APPEND_MESSAGE,
        message: {
            timestamp: Date.now(),
            avatar,
            username,
            text
        }
    });
};

export {
    chatAppendMessageAction
};
