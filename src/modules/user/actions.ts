import { serializeUser } from "../serial";

export const USER_SET_NAME = "@user/set-name";

export interface UserSetPropsAction {
    type: typeof USER_SET_NAME;
    user: {
        name: string;
        avatar: string;
    };
}

export type UserAction = UserSetPropsAction;

const userSetPropsAction = (name: string, avatar: string): UserSetPropsAction => {
    serializeUser({ name, avatar });
    return {
        type: USER_SET_NAME,
        user: {
            name,
            avatar
        }
    };
};

export {
    userSetPropsAction
};
