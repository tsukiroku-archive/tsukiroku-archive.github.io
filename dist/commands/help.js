import { commands } from "../command.js";
const on = (_command, _args) => {
    return {
        execute: () => {
            return `<br>${commands.join("<br>")}<br>`;
        },
        command: "help",
        withNewline: true,
    };
};
export { on };
