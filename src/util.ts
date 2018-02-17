const isProd = () => process.env.NODE_ENV === "production";
const isDev = () => !isProd();

export {
    isProd
};
