cargo fmt

WPATH="./pkg"

wasm-pack build --target web
mv "${WPATH}/web.js" "./wasm"
mv "${WPATH}/web_bg.wasm" "./wasm"
mv "${WPATH}/web_bg.wasm.d.ts" "./wasm"