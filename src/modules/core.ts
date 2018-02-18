import { applyMiddleware, combineReducers, createStore } from "redux";

import { chatReducer as chat, ChatState } from "./chat";
import { userReducer as user, UserState } from "./user";
import { transportMiddleware } from "./middleware";

export interface ChatUIState {
    user: UserState;
    chat: ChatState;
}

const rootReducer = combineReducers({
    user,
    chat
} as any);

const middlware = applyMiddleware(transportMiddleware);

const configureStore = () => createStore(rootReducer, middlware);

export {
    configureStore
};
