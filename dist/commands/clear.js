import { init, terminal } from "../terminal.js";
const on = (_command, _args) => {
    return {
        execute: () => {
            terminal.innerHTML = "";
            init();
            return null;
        },
        command: "clear",
        withNewline: false,
    };
};
export { on };
