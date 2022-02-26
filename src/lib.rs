use wasm_bindgen::prelude::*;

mod ws;
use ws::default as wd;

#[wasm_bindgen]
pub fn wasm_init() -> Result<(), JsValue> {
    let w = wd();
    let element = w.document.create_element("test")?;
    element.set_text_content(Some("testt"));

    w.body.append_child(&element)?;
    Ok(())
}
