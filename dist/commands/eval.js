const on = (_command, args) => {
    return {
        execute: () => {
            if (args.length === 0)
                return "<br>";
            return `${eval(args.join(" "))}`;
        },
        command: "eval",
        withNewline: true,
    };
};
export { on };
