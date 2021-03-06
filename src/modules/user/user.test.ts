import { ChatUIState } from "../core";

import * as test from "tape";
import * as deepFreeze from "deep-freeze";

import { userReducer, userSetPropsAction } from "./index";
import { selectUserAvatar, selectUserName } from "./selectors";
import { userInitialState } from "./reducer";

deepFreeze(userInitialState);

test("Module | user", t => {
    const name = "0xdeadbeef";
    const avatar = "image.png";
    const after: Partial<ChatUIState> = {
        user: {
            name,
            avatar,
        }
    };
    deepFreeze(after);
    t.deepEqual(
        userReducer(userInitialState, userSetPropsAction(name, avatar)),
        after.user,
        "reducer sets user.name"
    );

    t.equal(name, selectUserName(after as ChatUIState),
        "selectUserName returns user.name");

    t.equal(avatar, selectUserAvatar(after as ChatUIState),
        "selectUserAvatar returns user.avatar");

    t.end();
});
