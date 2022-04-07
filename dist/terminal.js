import { execute } from "./command.js";
const terminal = document.querySelector("#terminal");
const element = `
<span style="color: #00c800">root@User</span
><span style="color: #ffffff">:</span><span style="color: #106dca">~</span
><span style="color: #ffffff">$ </span>
<input type="text" class="input" autofocus />
`;
const addInputElement = (command = { execute: () => null, command: "", withNewline: false }, commandExecute = null, commandResult = "", _args = []) => {
    terminal.innerHTML += `<span style="color: rgb(170, 170, 170);">${commandExecute ? `${commandResult} ${_args.join(" ")}` : ""}<span>\n<br> ${commandExecute ?? ""} ${command.withNewline ? "<br>" : ""} ${element}`;
};
addInputElement();
let input = document.querySelector("input");
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
            addInputElement(command, commandExecute, commandResult, b);
            input = document.querySelector("input");
            input?.focus();
            init();
        }
    });
};
export { input, terminal, init, addInputElement };
