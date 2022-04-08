import { ICommand } from "../command.js";

const color = (text: string, color: string) => {
  return `<span style="color: #${color}">${text}</span>`;
};

const on = (_command: string, args: string[]): ICommand => {
  return {
    execute: () => {
      if (args.join("") == "--ko") {
        return `
<br>
  <div class="bio-title">
    <br>
    <span>TSUKIROKU</span>
  </div>
  <div class="bio-content">
    <br>
    <span>
      주로
      ${color("TypeScript", "0081f7")}, 
      ${color("Javascript", "DFFF06")}, 
      ${color("Rust", "E9AD45")}
       등등의 프로그래밍 언어를 다루고 있습니다.
      <br>
      또한, Adobe
      ${color("Photoshop", "31a8ff")}, 
      ${color("Illustrator", "f79500")}, 
      ${color("Premiere Pro", "9999ff")}를 사용합니다.
      <br>
      <div>
        <br>
        ${color(
          "트위터",
          "2aa9e0"
        )}: <a href="https://twitter.com/tsukiroku_t">${color(
          "@tsukiroku_t",
          "2aa9e0"
        )}</a>
        <br>
        ${color(
          "깃허브",
          "9cdaf0"
        )}: <a href="https://github.com/tsukiroku">${color(
          "@tsukiroku",
          "2aa9e0"
        )}</a>
    </div>
    <br>
    <div style="font-size: 1.5rem">
        <br>
        ${color("만나서 반갑습니다! 😄", "FFFFFF")}
    </div>
  </span>
</div>
<br>
            `;
      } else {
        return `
${color(
  "You can change the language to Korean using <strong>--ko</strong>.",
  "ff6464"
)}  
<br>
<div class="bio-title">
  <br>
  <span>TSUKIROKU</span>
</div>
<div class="bio-content">
  <br>
  <span>
    I use
    ${color("TypeScript", "0081f7")}, 
    ${color("Javascript", "DFFF06")}, 
    ${color("Rust", "E9AD45")}
    and 
    ${color("etc", "9C9C9C")}.
    <br>
    Also, i use products like Adobe
    ${color("Photoshop", "31a8ff")}, 
    ${color("Illustrator", "f79500")}, 
    ${color("Premiere Pro", "9999ff")}
    and 
    ${color("etc", "9C9C9C")}.
    <br>
    <div>
      <br>
      ${color(
        "Twitter",
        "2aa9e0"
      )}: <a href="https://twitter.com/tsukiroku_t">${color(
          "@tsukiroku_t",
          "2aa9e0"
        )}</a>
      <br>
      ${color(
        "Github",
        "9cdaf0"
      )}: <a href="https://github.com/tsukiroku">${color(
          "@tsukiroku",
          "2aa9e0"
        )}</a>
    </div>
    <br>
    <div style="font-size: 1.5rem">
        <br>
        ${color("😄 Nice to meet you!", "FFFFFF")}
    </div>
  </span>
</div>
<br>
      `;
      }
    },
    command: "bio",
    withNewline: true,
  };
};

export { on };
