const on = (_command, _args) => {
    return {
        execute: () => {
            return '<br><a href="https://github.com/tsukiroku">Click here.</a><br>';
        },
        command: "github",
        withNewline: true,
    };
};
export { on };
