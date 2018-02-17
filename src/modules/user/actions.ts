export const USER_SET_NAME = "@user/set-name";

export interface UserSetNameAction {
    type: typeof USER_SET_NAME;
    user: {
        name: string;
    };
}

export type UserAction = UserSetNameAction;

const userSetNameAction = (name: string): UserSetNameAction => ({
    type: USER_SET_NAME,
    user: {
        name
    }
});

export {
    userSetNameAction
}
