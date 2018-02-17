import { ChatUIState } from "../state";

import * as test from "tape";
import * as deepFreeze from "deep-freeze";

import { user, userSetNameAction } from "./index";
import { selectUserName } from "./selectors";

const initialState: ChatUIState = {
    user: {
        name: ""
    }
};

deepFreeze(initialState);

test("Module | user", t => {
    const name = "0xdeadbeef";
    const after: ChatUIState = {
        user: {
            name
        }
    };
    deepFreeze(after);
    t.deepEqual(
        user(initialState.user, userSetNameAction(name)),
        after.user,
        "reducer should change the user.name"
    );

    t.equal(name, selectUserName(after), "selectUserName returns user.name");

    t.end();
});
