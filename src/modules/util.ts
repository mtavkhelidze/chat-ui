import * as moment from "moment";

const isProd = () => process.env.NODE_ENV === "production";
const isDev = () => !isProd();

const cx = (name: string, nostro: boolean) => nostro ? `${name} nostro` : name;

const tsString = (timestamp: number) => moment(timestamp).fromNow();
export {
    isProd,
    isDev,
    cx,
    tsString,
};
