use web_sys::{Document, HtmlElement, Window};

#[derive(Debug)]
pub struct Web {
    pub window: Window,
    pub document: Document,

    pub body: HtmlElement,
}

pub fn default<'a>() -> Web {
    let w = web_sys::window().unwrap();
    let d = w.document().unwrap();
    let b = d.body().unwrap();
    return Web {
        window: w,
        document: d,
        body: b,
    };
}
