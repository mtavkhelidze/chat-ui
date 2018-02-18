const isProd = () => process.env.NODE_ENV === "production";
const isDev = () => !isProd();

const cx = (name: string, nostro: boolean) => nostro ? `${name} nostro` : name;

export {
    isProd,
    isDev,
    cx,
};
