import { UserState } from "./index";

import * as Cookie from "universal-cookie";

const COOKIE_PREFIX = "chat-im-ui";

const cookie = new Cookie();

const userCookieName = [COOKIE_PREFIX, "user"].join("-");

const serializeUser = (user: UserState): void => cookie.set(userCookieName, user);

const desrializeUser = (): UserState => cookie.get(userCookieName);

export {
    serializeUser,
    desrializeUser
};
