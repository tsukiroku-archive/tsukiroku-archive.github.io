use seed::{prelude::*, *};

pub type Model = String;

#[derive(Debug)]
pub enum Msg {}

pub fn init(_: Url, _: &mut impl Orders<Msg>) -> Model {
    Model::default()
}

pub fn update(_: Msg, _: &mut Model, _: &mut impl Orders<Msg>) {}

pub fn view(_: &Model) -> Node<Msg> {
    div![div![
        style! {
            St::Display => "flex",
            St::JustifyContent => "center",
            St::AlignItems => "center",
        },
        h1! {
            "rwdv",
            style! {
                St::Color => "white"
            }
        }
    ]]
}
