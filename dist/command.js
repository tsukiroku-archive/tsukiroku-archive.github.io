import { terminal, init } from "./terminal.js";
const commands = ["help", "github", "twitter", "clear", "echo"].sort();
const execute = (command, args) => {
    if (!command)
        return { execute: () => null, command: command, withNewline: false };
    switch (command.toLowerCase()) {
        case "help":
            return {
                execute: () => {
                    return `<br>${commands.join("<br>")}<br>`;
                },
                command: "help",
                withNewline: true,
            };
        case "github":
            return {
                execute: () => {
                    return '<br><a href="https://github.com/tsukiroku">Click here.</a><br>';
                },
                command: "github",
                withNewline: true,
            };
        case "twitter":
            return {
                execute: () => {
                    return '<br><a href="https://twitter.com/tsukiroku_t">Click here.</a><br>';
                },
                command: "twitter",
                withNewline: true,
            };
        case "clear":
            return {
                execute: () => {
                    terminal.innerHTML = "";
                    init();
                    return null;
                },
                command: "clear",
                withNewline: false,
            };
        case "echo":
            return {
                execute: () => {
                    if (args.length === 0)
                        return "<br>";
                    return `${args.join(" ")}`;
                },
                command: "echo",
                withNewline: true,
            };
        default:
            return {
                execute: () => {
                    return `${command}: command not found.`;
                },
                command: command,
                withNewline: true,
            };
    }
};
export { execute };
