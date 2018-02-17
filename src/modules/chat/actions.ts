import { USER_SET_NAME, UserSetNameAction } from "./types";

export const userSetNameAction = (name: string): UserSetNameAction => ({
    type: USER_SET_NAME,
    payload: {
        name
    }
});
