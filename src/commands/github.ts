import { ICommand } from "../command.js";

const on = (_command: string, _args: string[]): ICommand => {
  return {
    execute: () => {
      return '<br><a href="https://github.com/tsukiroku">Click here.</a><br>';
    },
    command: "github",
    withNewline: true,
  };
};

export { on };
