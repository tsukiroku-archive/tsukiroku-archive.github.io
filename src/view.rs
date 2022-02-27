use seed::{prelude::*, *};

use crate::image::f;

pub type Model = String;

#[derive(Debug)]
pub enum Msg {}

pub fn init(_: Url, _: &mut impl Orders<Msg>) -> Model {
    Model::default()
}

pub fn update(_: Msg, _: &mut Model, _: &mut impl Orders<Msg>) {}

pub fn view(_: &Model) -> Node<Msg> {
    div![
        style! {
            St::FontFamily => "montserrat"
        },
        div![
            style! {
                St::Display => "grid",
                St::PlaceItems => "center",
                St::MinHeight => "70vh",
                St::Width => "100%"
            },
            a![
                attrs! { At::Href => "https://youtu.be/jYvMWxKuCvQ" },
                img![attrs! {At::Src => f(), At::Alt => "안아줘요"}]
            ],
        ],
        div![
            style! {
                St::Display => "grid",
                St::PlaceItems => "center",
                St::MinHeight => "20vh",

                St::FontSize => "30px",
                St::Color => "white"
            },
            p! {
                "By ",
                a! {
                    "rwdv",
                    attrs! { At::Href => "https://github.com/rwdv" },
                    style! { St::TextDecoration => "none", St::Color => "rgb(255, 190, 200)" }
                }
            }
        ]
    ]
}
