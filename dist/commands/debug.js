const on = (command, args) => {
    return {
        execute: () => {
            return `
command: ${command} <br>
args: ${args} <br>
userAgent: ${navigator.userAgent}
      `;
        },
        command: "debug",
        withNewline: true,
    };
};
export { on };
