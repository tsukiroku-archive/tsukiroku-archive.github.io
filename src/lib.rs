use wasm_bindgen::prelude::*;

use seed::prelude::*;

mod image;
mod view;
mod ws;

use view::*;
use web_sys::HtmlBodyElement;
use ws::default as wd;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}

#[wasm_bindgen]
pub fn wasm_init() -> Result<(), JsValue> {
    App::start("root", init, update, view);
    wd().body
        .dyn_into::<HtmlBodyElement>()
        .unwrap()
        .set_bg_color("#18191c");
    Ok(())
}
