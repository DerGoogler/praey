namespace Praey {
  export type Colors = Record<string, string> | undefined;
}

class Praey {
  private _color: Praey.Colors = {
    r: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    // foregrounds
    "fg-black": "\x1b[30m",
    "fg-red": "\x1b[31m",
    "fg-green": "\x1b[32m",
    "fg-yellow": "\x1b[33m",
    "fg-blue": "\x1b[34m",
    "fg-magenta": "\x1b[35m",
    "fg-cyan": "\x1b[36m",
    "fg-white": "\x1b[37m",
    // backgrounds
    "bg-black": "\x1b[40m",
    "bg-red": "\x1b[41m",
    "bg-green": "\x1b[42m",
    "bg-yellow": "\x1b[43m",
    "bg-blue": "\x1b[44m",
    "bg-magenta": "\x1b[45m",
    "bg-cyan": "\x1b[46m",
    "bg-white": "\x1b[47m",
  };

  /**
   * Simple and easy console logging with colors
   * @param colors Add custom colors. Alternatively can {@link praey} be used
   *
   * ```ts
   * import { Praey } from "praey"
   *
   * const log = new Praey({
   *   kur: "\x1b[3m",
   * });
   *
   * log.out("This is <fg-yellow><kur>important!<r><r>");
   * ```
   */
  public constructor(colors?: Praey.Colors) {
    this._color = Object.assign(this._color, colors || {});
  }

  private static parser(text: string, tofor: any) {
    if (tofor.length === 1 && tofor[0] !== null && typeof tofor[0] === "object") {
      tofor = tofor[0];
    }
    return text.replace(/<(.*?)>/g, function (match, key) {
      return typeof tofor[key] !== "undefined" ? tofor[key] : match;
    });
  }

  public out(text: string) {
    console.log(Praey.parser(text, this._color));
  }
}

/**
 * Static {@link Praey} constructor
 */
const praey: Praey = new Praey();

export { Praey, praey };
