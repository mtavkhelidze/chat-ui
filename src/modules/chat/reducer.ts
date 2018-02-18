import { CHAT_APPEND_MESSAGE, ChatAction, ChatMessage } from "./actions";

export interface ChatState {
    messages: ChatMessage[];
}

const chatInitialState: ChatState = {
    messages: []
};

const chatReducer = (
    state: ChatState = chatInitialState, action: ChatAction): ChatState => {
    const { type, message } = action;

    if (type === CHAT_APPEND_MESSAGE)
        return {
            messages: [...state.messages, message as ChatMessage]
        };

    return state;
};

export {
    chatInitialState,
    chatReducer
};
