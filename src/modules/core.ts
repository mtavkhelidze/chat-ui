import { combineReducers, createStore } from "redux";

import { chatReducer as chat, ChatState } from "./chat";
import { userReducer as user, UserState } from "./user";

export interface ChatUIState {
    user: UserState;
    chat: ChatState;
}

export interface NetworkMessage {
    avatar: string;
    username: string;
    text: string;
}

const rootReducer = combineReducers({
    user,
    chat
} as any);

const configureStore = () => createStore(
    rootReducer,
    (<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__()
);

export {
    configureStore
};
