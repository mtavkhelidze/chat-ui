import { USER_SET_NAME, UserAction } from "./actions";

export interface UserState {
    name: string;
}

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
