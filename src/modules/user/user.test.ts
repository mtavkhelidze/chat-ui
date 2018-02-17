import * as test from "tape";
import * as deepFreeze from "deep-freeze";

import { user, userSetNameAction } from "./index";
import { UserState } from "./types";

const initialState: UserState = {
    name: ""
};
deepFreeze(initialState);

test("userSetNameAction", t => {
    const name = "0xdeadbeef";
    const after: UserState = {
        name
    };
    deepFreeze(after);
    t.deepEqual(
        user(initialState, userSetNameAction(name)),
        after,
        "should change the user.name"
    );

    t.end();
});
