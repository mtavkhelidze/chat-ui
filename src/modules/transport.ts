import { Action, Dispatch, Middleware, MiddlewareAPI } from "redux";
import { NetworkCarrier, networkInit, NetworkMessage } from "./network";
import { ChatAction, chatAppendMessageAction, ChatMessage } from "./chat";

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

const transportMiddleware: Middleware =
    (api: MiddlewareAPI<void>) => (next: Dispatch<void>) => <A extends Action>(action: A) =>
        next(action);

export {
    transportMiddleware,
    transportInit
};
