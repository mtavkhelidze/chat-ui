import { USER_SET_NAME, UserAction, UserState } from "./types";

const initialState: UserState = {
    name: ""
};

const user = (state: UserState = initialState, action: UserAction) => {
    const { type, payload } = action;

    if (type === USER_SET_NAME)
        return {
            name: payload.name
        };

    return state;
};

export {
    user
};
