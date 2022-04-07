import { ICommand } from "../command.js";

const on = (_command: string, args: string[]): ICommand => {
  return {
    execute: () => {
      if (args.length === 0) return "<br>";
      return `${args.join(" ")}`;
    },
    command: "echo",
    withNewline: true,
  };
};

export { on };
