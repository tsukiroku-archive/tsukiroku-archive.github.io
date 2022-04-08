import * as help from "./help.js";
import * as github from "./github.js";
import * as twitter from "./twitter.js";
import * as clear from "./clear.js";
import * as echo from "./echo.js";
import * as bio from "./bio.js";
import * as debug from "./debug.js";

import { ICommand } from "../command.js";

const on = (command: string, args: string[]): ICommand => {
  return {
    execute: () => {
      return `${command}: command not found.`;
    },
    command: command,
    withNewline: true,
  };
};

export { on };

export { help, github, twitter, clear, echo, bio, debug };
