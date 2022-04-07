import * as commandExecute from "./commands/index.js";
const commands = ["help", "github", "twitter", "clear", "echo", "bio"]
    .sort()
    .map((t) => {
    if (["github", "twitter", "bio"].includes(t)) {
        return `<span style="color: #34a6ff"><strong>${t}</strong></span>`;
    }
    else {
        return `<span style="color: #FFFFFF">${t}</span>`;
    }
});
const execute = (command, args) => {
    if (!command)
        return { execute: () => null, command: command, withNewline: false };
    switch (command.toLowerCase()) {
        case "help":
            return commandExecute.help.on(command, args);
        case "github":
            return commandExecute.github.on(command, args);
        case "twitter":
            return commandExecute.twitter.on(command, args);
        case "clear":
            return commandExecute.clear.on(command, args);
        case "echo":
            return commandExecute.echo.on(command, args);
        case "bio":
            return commandExecute.bio.on(command, args);
        default:
            return commandExecute.on(command, args);
    }
};
export { execute, commands };
