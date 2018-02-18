import { ChatUIState } from "../core";
import { NetworkMessage } from "../transport";

import * as test from "tape";
import * as deepFreeze from "deep-freeze";
import * as sinon from "sinon";

import { chatInitialState, chatReducer } from "./reducer";
import { chatAppendMessageAction } from "./actions";
import { selectChatMessageCount, selectChatMessages } from "./selectors";

deepFreeze(chatInitialState);

test("Module | chat", t => {
    const msg: NetworkMessage = {
        avatar: "avatar",
        username: "username",
        text: "text"
    };
    const ts = 1234;
    const nowStub = sinon.stub(Date, "now").returns(ts);

    const after: Partial<ChatUIState> = {
        chat: {
            messages: [{
                timestamp: ts,
                avatar: msg.avatar,
                username: msg.username,
                text: msg.text
            }]
        }
    };
    deepFreeze(after);

    t.deepEqual(after.chat, chatReducer(chatInitialState, chatAppendMessageAction(msg)),
        "reducer appends message to chat message list");

    const state = after as ChatUIState;
    t.deepEqual(state.chat.messages, selectChatMessages(state),
        "selectChatMessages returns message array");

    t.deepEqual(state.chat.messages.length, selectChatMessageCount(state),
        "selectChatMessageCount returns message count");

    nowStub.restore();
    t.end();
});
