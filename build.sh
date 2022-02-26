cargo fmt

WPATH="./pkg"

wasm-pack build --target web
mv "${WPATH}/rwdv.js" "./wasm"
mv "${WPATH}/rwdv_bg.wasm" "./wasm"
mv "${WPATH}/rwdv_bg.wasm.d.ts" "./wasm"