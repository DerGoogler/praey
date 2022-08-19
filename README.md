# PRÆY

Simple and easy to understand colored console logging for Node.js

> This library is inspired by the Bun.sh console logging :)

## Install

```shell
bun add preay
```

## Documentation

### Add more colors or combine colors

```ts
import { Praey } from "praey";

const log = new Praey({
  italic: "\x1b[3m",
});

log.out("This is <italic>important!<r>");
```

### Without `new` call

```ts
import { praey } from "praey";

praey.out("<fg-blue>I'm blue<r>");
```

## Supported built-in colors

- `r` - This resets the color
- `bright`
- `dim`
- `underscore`
- `blink`
- `reverse`
- `hidden`
- `fg-black`
- `fg-red`
- `fg-green`
- `fg-yellow`
- `fg-blue`
- `fg-magenta`
- `fg-cyan`
- `fg-white`
- `bg-black`
- `bg-red`
- `bg-green`
- `bg-yellow`
- `bg-blue`
- `bg-magenta`
- `bg-cyan`
- `bg-white`
