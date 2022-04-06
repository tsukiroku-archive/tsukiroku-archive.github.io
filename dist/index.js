"use strict";
let input = document.querySelector("input");
const terminal = document.querySelector("#terminal");
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
const element = `
<span style="color: #00c800">root@User</span
><span style="color: #ffffff">:</span><span style="color: #106dca">~</span
><span style="color: #ffffff">$ </span>
<input type="text" class="input" autofocus />
`;
const init = () => {
    terminal?.addEventListener("click", () => {
        input?.focus();
    });
    input?.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const [a, ...b] = input.value.split(" ");
            const command = execute(a, b);
            const commandExecute = command.execute();
            const commandResult = command.command;
            input?.remove();
            terminal.innerHTML += `<span style="color: rgb(170, 170, 170);">${commandExecute ? `${commandResult} ${b.join(" ")}` : ""}<span>\n<br> ${commandExecute ?? ""} ${command.withNewline ? "<br>" : ""} ${element}`;
            input = document.querySelector("input");
            input?.focus();
            init();
        }
    });
};
init();
