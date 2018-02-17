import { ChatUIState } from "../core";

import * as test from "tape";
import * as deepFreeze from "deep-freeze";

import { userReducer, userSetNameAction } from "./index";
import { selectUserName } from "./selectors";
import { userInitialState } from "./reducer";

deepFreeze(userInitialState);

test("Module | user", t => {
    const name = "0xdeadbeef";
    const after: Partial<ChatUIState> = {
        user: {
            name
        }
    };
    deepFreeze(after);
    t.deepEqual(
        userReducer(userInitialState, userSetNameAction(name)),
        after.user,
        "reducer sets user.name"
    );

    t.equal(name, selectUserName(after as ChatUIState),
        "selectUserName returns user.name");

    t.end();
});
