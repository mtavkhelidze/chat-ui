import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { chatInitialState, chatReducer as chat, ChatState } from "./chat";
import { userReducer as user, UserState } from "./user";
import { transportMiddleware } from "./transport";
import { desrializeUser, serializeUser } from "./serial";
import { randomAvatar, randomUsername } from "./util";

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

const userProps = (): UserState => {
    const u = desrializeUser() || {};
    const usr = {
        name: u.name || randomUsername(),
        avatar: u.avatar || randomAvatar()
    };
    serializeUser(usr);
    return usr;
};

const preloadedState: ChatUIState = {
    user: userProps(),
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
