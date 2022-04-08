import { init, resizeInputElement } from "./terminal.js";
init();
resizeInputElement(window.innerWidth);
window.addEventListener("resize", () => {
    resizeInputElement(window.innerWidth);
});
