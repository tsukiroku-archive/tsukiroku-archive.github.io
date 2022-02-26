use rand::{prelude::SliceRandom, thread_rng};

pub fn f() -> String {
    let mut i = [
        "https://cdn.discordapp.com/attachments/889855991246626869/947086839725060167/normal.gif"
            .to_string(),
        "https://cdn.discordapp.com/attachments/889855991246626869/947086839511134208/2x.gif"
            .to_string(),
    ];
    i.shuffle(&mut thread_rng());
    crate::log(
        format!(
            "image: {}",
            i[0].split(&"/".to_string()).collect::<Vec<_>>()[6]
        )
        .as_str(),
    );
    return i[0].clone();
}
