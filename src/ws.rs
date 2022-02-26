#![allow(dead_code)]

use web_sys::{Document, HtmlElement, Window};

#[derive(Debug)]
pub struct Web {
    pub window: Window,
    pub document: Document,

    pub body: HtmlElement,
}

pub fn default() -> Web {
    let w = web_sys::window().unwrap();
    let d = w.document().unwrap();
    return Web {
        window: w,
        document: d.clone(),
        body: d.body().unwrap().clone(),
    };
}
