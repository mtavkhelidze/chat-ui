import { ChatUIState } from "../core";
import { UserState } from "./reducer";

const selectUserName = (state: ChatUIState): UserState["name"] => state.user.name;

export {
    selectUserName
};
