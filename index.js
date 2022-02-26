import init from "./pkg/rwdv.js";

(async () => {
  const wasm = await init("./pkg/rwdv_bg.wasm");
  wasm.wasm_init();
})();