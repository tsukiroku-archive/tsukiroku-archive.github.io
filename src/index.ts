interface ICommand {
  readonly execute: () => string;
  // readonly command: string;
  // readonly args: string[];
}

const execute = (command: string, _: string[]): ICommand => {
  if (!command) return { execute: () => "" };
  switch (command.toLowerCase()) {
    case "help":
      return {
        execute: () => {
          return "help <br>";
        },
      };
    case "github":
      return {
        execute: () => {
          return '<a href="https://github.com/tsukiroku">Click here.</a> <br>';
        },
      };
    default:
      return {
        execute: () => {
          return `${command}: command not found <br>`;
        },
      };
  }
};

let input = document.querySelector("input");
const terminal = document.body;

const element = `
<span style="color: #00c800">root@User</span
><span style="color: #ffffff">:</span><span style="color: #106dca">~</span
><span style="color: #ffffff">$ </span>
<input type="text" class="input" autofocus />
`;

const init = () => {
  terminal?.addEventListener("click", () => {
    input?.focus();
  });

  input?.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const _i = input?.value;
      input?.remove();
      const [c, ...a] = _i!.split(" ");
      terminal!.innerHTML += `<span style="color: rgb(170, 170, 170);">${_i}<span>\n<br> ${execute(
        c,
        a
      ).execute()} ${element}`;

      input = document.querySelector("input");
      input?.focus();
      init();
    }
  });
};

init();
