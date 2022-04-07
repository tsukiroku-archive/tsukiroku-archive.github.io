```typescript
import { ICommand } from "../command.js";

const on = (command: string, args: string[]): ICommand => {
  return {
    execute: () => {
      return `example text`;
    },
    command: "example",
    withNewline: true,
  };
};

export { on };
```