import { ICommand } from "../command.js";

const on = (_command: string, _args: string[]): ICommand => {
  return {
    execute: () => {
      return '<br><a href="https://twitter.com/tsukiroku_t">Click here.</a><br>';
    },
    command: "twitter",
    withNewline: true,
  };
};

export { on };
