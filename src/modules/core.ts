import { UserState } from "./user";
import { ChatState } from "./chat";

export interface ChatUIState {
    user: UserState;
    chat: ChatState;
}

export interface NetworkMessage {
    avatar: string;
    username: string;
    text: string;
}
