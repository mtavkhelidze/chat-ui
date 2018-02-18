import { CHAT_APPEND_MESSAGE, ChatAction, ChatMessage } from "./actions";

export interface ChatState {
    messages: ChatMessage[];
}

const chatInitialState: ChatState = {
    messages: [{
        username: "Misha",
        text: `
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        some text
        `,
        avatar: "some avatar",
        timestamp: Date.now(),
        nostro: false
    }]
};

const chatReducer = (
    state: ChatState = chatInitialState, action: ChatAction): ChatState => {
    const { type, message } = action;
    if (type === CHAT_APPEND_MESSAGE) {
        return {
            messages: [...state.messages, message]
        };
    }
    return state;
};

export {
    chatInitialState,
    chatReducer
};
