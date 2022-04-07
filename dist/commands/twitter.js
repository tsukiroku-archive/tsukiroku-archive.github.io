const on = (_command, _args) => {
    return {
        execute: () => {
            return '<br><a href="https://twitter.com/tsukiroku_t">Click here.</a><br>';
        },
        command: "twitter",
        withNewline: true,
    };
};
export { on };
