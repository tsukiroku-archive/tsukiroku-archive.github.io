const on = (_command, args) => {
    return {
        execute: () => {
            if (args.length === 0)
                return "<br>";
            return `${args.join(" ")}`;
        },
        command: "echo",
        withNewline: true,
    };
};
export { on };
