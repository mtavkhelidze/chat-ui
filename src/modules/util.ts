import * as moment from "moment";

const isProd = () => process.env.NODE_ENV === "production";
const isDev = () => !isProd();

const cx = (name: string, nostro: boolean) => nostro ? `${name} nostro` : name;

const tsString = (timestamp: number) => moment(timestamp).fromNow();

const randomAvatar = () => {
    const a = [
        "https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png",
        "https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png",
        "https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png",
        "https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png",
        "https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png"
    ];
    const i = Math.floor(Math.random() * a.length);
    return a[i];
};
const randomUsername = () => {
    const f = [
        "Marc-André",
        "Nélson",
        "Gerard",
        "Ivan",
        "Sergio",
        "Denis",
        "Andrés",
        "Luis",
        "Lionel",
        "Ousmane",
        "Jasper",
        "Philippe",
        "Paulinho",
        "Paco",
        "Jordi",
        "Lucas",
        "Sergi",
        "André",
        "Aleix",
        "Samuel",
        "Yerry",
        "Thomas"
    ];
    const s = [
        "ter-Stegen",
        "Semedo",
        "Piqué",
        "Rakitić",
        "Busquets",
        "Suárez",
        "Iniesta",
        "Suárez",
        "Messi",
        "Dembélé",
        "Cillessen",
        "Coutinho",
        "Alcácer",
        "Alba",
        "Digne",
        "Roberto",
        "Gomes",
        "Vidal",
        "Umtiti",
        "Mina",
        "Vermaelen"
    ];

    const fi = Math.floor(Math.random() * f.length);
    const si = Math.floor(Math.random() * s.length);
    return `${f[fi]} ${s[si]}`;
};

export {
    isProd,
    isDev,
    cx,
    tsString,
    randomUsername,
    randomAvatar
};
