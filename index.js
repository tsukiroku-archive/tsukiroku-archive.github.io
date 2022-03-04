import init from "./wasm/web.js";

(async () => {
  const wasm = await init("./wasm/web_bg.wasm");
  wasm.wasm_init();
})();