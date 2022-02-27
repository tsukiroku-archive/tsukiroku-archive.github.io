#![allow(dead_code)]

use web_sys::{Document, HtmlElement, Window, *};

#[derive(Debug)]
pub struct Web {
    pub window: Window,
    pub document: Document,

    pub body: HtmlElement,
}

pub fn default() -> Option<Web> {
    Some(Web {
        window: window()?,
        document: window()?.document()?,
        body: window()?.document()?.body()?,
    })
}
