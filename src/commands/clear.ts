import { ICommand } from "../command.js";
import { init, terminal } from "../terminal.js";

const on = (_command: string, _args: string[]): ICommand => {
  return {
    execute: () => {
      terminal!.innerHTML = "";
      init();
      return null;
    },
    command: "clear",
    withNewline: false,
  };
};

export { on };
