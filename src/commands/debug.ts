import { ICommand } from "../command.js";

const on = (command: string, args: string[]): ICommand => {
  return {
    execute: () => {
      return `
command: ${command} <br>
args: ${args} <br>
userAgent: ${navigator.userAgent}
      `;
    },
    command: "debug",
    withNewline: true,
  };
};

export { on };
