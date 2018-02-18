import { USER_SET_NAME, UserAction } from "./actions";

export interface UserState {
    name: string;
    avatar: string;
}

const userInitialState: UserState = {
    name: "",
    avatar: ""
};

const userReducer = (state: UserState = userInitialState, action: UserAction) => {
    const { type, user } = action;

    if (type === USER_SET_NAME)
        return {
            ...user
        };

    return state;
};

export {
    userInitialState,
    userReducer
};
