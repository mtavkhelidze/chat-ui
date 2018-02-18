import { Dispatch } from "react-redux";
import { Action, Middleware } from "redux";

import { NetworkCarrier, networkInit, NetworkMessage } from "./network";
import {
    CHAT_APPEND_MESSAGE,
    CHAT_SEND_MESSAGE,
    ChatAction,
    ChatAppendMessageAction,
    chatAppendMessageAction,
    ChatMessage,
    ChatSendMessageAction
} from "./chat";
import { selectUserAvatar, selectUserName } from "./user";

let send: NetworkCarrier["send"] = (msg: NetworkMessage) => {
    throw new Error("Network transport uninitialized.");
};

const onConnectionStateChange = (state: string) => () =>
    /* tslint:disable-next-line */
    console.log(`Network is ${state}.`);

const onConnect = onConnectionStateChange("connected");

const onDisconnect = onConnectionStateChange("disconnected");

const networkToChat = (msg: NetworkMessage): ChatMessage => ({
    ...msg,
    timestamp: Date.now(),
    nostro: false
});

const messageDispatcher = (dispatch: Dispatch<ChatAction>) => (msg: NetworkMessage) =>
    dispatch(chatAppendMessageAction(networkToChat(msg)));

const transportInit = (channel: string, dispatch: Dispatch<ChatAction>) => {
    const onReceive = messageDispatcher(dispatch);
    send = networkInit(channel, {
        onConnect,
        onDisconnect,
        onReceive,
        send
    });
};

const transportMiddleware: Middleware = (api: any) => (next: any) =>
    (action: Action | ChatAction) => {
        if (action.type === CHAT_SEND_MESSAGE) {
            const act = action as ChatSendMessageAction;
            send(act.message);
        } else if (action.type === CHAT_APPEND_MESSAGE) {
            const user = selectUserName(api.getState());
            const avatar = selectUserAvatar(api.getState());
            const msg = (action as ChatAppendMessageAction).message;

            if (user === msg.username && avatar === msg.avatar)
                (action as ChatAppendMessageAction).message.nostro = true;

        }
        return next(action);
    };

export {
    transportMiddleware,
    transportInit
};
