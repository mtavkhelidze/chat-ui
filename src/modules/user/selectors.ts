import { ChatUIState } from "../core";
import { UserState } from "./reducer";

const selectUserName = (state: ChatUIState): UserState["name"] => state.user.name;
const selectUserAvatar = (state: ChatUIState): UserState["avatar"] => state.user.avatar;

export {
    selectUserName,
    selectUserAvatar
};
