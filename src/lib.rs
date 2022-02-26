use wasm_bindgen::prelude::*;

mod ws;
use ws::default as wd;

#[wasm_bindgen]
pub fn wasm_init() -> Result<(), JsValue> {
    let w = wd();
    let element = w.document.create_element("h1")?;
    element.set_text_content(Some("asdf"));

    w.body.append_child(&element)?;
    Ok(())
}
