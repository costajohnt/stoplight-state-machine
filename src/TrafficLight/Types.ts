type Green = { kind: "green" };
type Red = { kind: "red" };
type Yellow = { kind: "yellow" };
type BlinkingRed = { kind: "blinking-red" };
type LightsOut = { kind: "lights-out" };

export type State = Green | Yellow | Red | BlinkingRed | LightsOut;

export const green = (): Green => ({ kind: "green" });
export const red = (): Red => ({ kind: "red" });
export const yellow = (): Yellow => ({ kind: "yellow" });
export const blinkingRed = (): BlinkingRed => ({ kind: "blinking-red" });
export const lightsOut = (): LightsOut => ({ kind: "lights-out" });
