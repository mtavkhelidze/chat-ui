import { ChatUIState } from "../core";
import { ChatMessage } from "./actions";

const selectChatMessages = (state: ChatUIState): ChatMessage[] => state.chat.messages;

const selectChatMessageCount = (state: ChatUIState): number => state.chat.messages.length;

export {
    selectChatMessages,
    selectChatMessageCount
};
