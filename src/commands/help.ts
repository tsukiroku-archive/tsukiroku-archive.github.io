import { commands, ICommand } from "../command.js";

const on = (_command: string, _args: string[]): ICommand => {
  return {
    execute: () => {
      return `<br>${commands.join("<br>")}<br>`;
    },
    command: "help",
    withNewline: true,
  };
};

export { on };