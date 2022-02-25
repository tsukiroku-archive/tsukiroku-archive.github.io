use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn wasm_init() -> Result<(), JsValue> {
    let window = web_sys::window().unwrap();
    let document = window.document().unwrap();
    let body = document.body().unwrap();

    let element = document.create_element("test")?;
    element.set_text_content(Some("테스트"));

    body.append_child(&element)?;
    Ok(())
}
