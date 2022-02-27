use rand::{prelude::SliceRandom, thread_rng};

pub fn f<'a>() -> &'a str {
    let mut i = ["./resource/1.gif", "./resource/2.gif"];
    i.shuffle(&mut thread_rng());
    crate::log(format!("image: {}", i[0]).as_str());
    i[0].clone()
}
