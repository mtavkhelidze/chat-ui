export const USER_SET_NAME = "@user/set-name";

export interface UserSetNameAction {
    type: typeof USER_SET_NAME;
    payload: {
        name: string;
    };
}

export type UserAction = UserSetNameAction;

export const userSetNameAction = (name: string): UserSetNameAction => ({
    type: USER_SET_NAME,
    payload: {
        name
    }
});
