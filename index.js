import init from "./wasm/rwdv.js";

(async () => {
  const wasm = await init("./wasm/rwdv_bg.wasm");
  wasm.wasm_init();
})();