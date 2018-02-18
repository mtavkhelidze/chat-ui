import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { chatInitialState, chatReducer as chat, ChatState } from "./chat";
import { userReducer as user, UserState } from "./user";
import { transportMiddleware } from "./transport";
import { desrializeUser } from "../serial";

export interface ChatUIState {
    user: UserState;
    chat: ChatState;
}

const rootReducer = combineReducers({
    user,
    chat
} as any);

const middleware = applyMiddleware(
    transportMiddleware
);

const preloadedState: ChatUIState = {
    user: desrializeUser(),
    chat: chatInitialState
};

const configureStore = () => createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(middleware)
);

export {
    configureStore
};
