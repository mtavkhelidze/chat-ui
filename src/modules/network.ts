import * as io from "socket.io-client";

export interface NetworkMessage {
    avatar: string;
    username: string;
    text: string;
}

export interface NetworkCarrier {
    send: (msg: NetworkMessage) => void | null;
    onReceive: (msg: NetworkMessage) => void;
    onConnect: () => void;
    onDisconnect: () => void;
}

const socket = io("https://spotim-demo-chat-server.herokuapp.com");

const networkInit = (
    evt: string, tr: NetworkCarrier): NetworkCarrier["send"] => {
    socket
        .on("connect", tr.onConnect)
        .on("disconnect", tr.onDisconnect)
        .on(evt, tr.onReceive);
    tr.send = (msg: NetworkMessage) => {
        socket.emit(evt, { ...msg });
    };
    return tr.send;
};

export {
    networkInit
};
