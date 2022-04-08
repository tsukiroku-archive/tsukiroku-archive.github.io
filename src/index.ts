import { init, input } from "./terminal.js";

init();

window.addEventListener("resize", () => {
  input!.width = window.innerWidth - window.innerWidth / 5;
});
