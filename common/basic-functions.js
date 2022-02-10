export const clamp01 = (x) => x < 0 ? 0 : x > 1 ? 1 : x;
export const clamp = (x, min = 0, max = 1) => x < min ? min : x > max ? max : x;
export const lerp = (a, b, t) => a + (b - a) * clamp01(t);
export const lerpUnclamped = (a, b, t) => a + (b - a) * t;
export const inverseLerp = (a, b, t) => clamp01((t - a) / (b - a));
export const inverseLerpUnclamped = (a, b, t) => (t - a) / (b - a);
export const remap = (inMin, inMax, outMin, outMax, x) => lerp(outMin, outMax, inverseLerp(inMin, inMax, x));
export const remapUnclamped = (inMin, inMax, outMin, outMax, x) => lerpUnclamped(outMin, outMax, inverseLerpUnclamped(inMin, inMax, x));
export const floor = (x, base = 1) => Math.floor(x / base) * base;
export const ceil = (x, base = 1) => Math.ceil(x / base) * base;
export const round = (x, base = 1) => Math.round(x / base) * base;
export const positiveModulo = (x, modulo) => {
    x %= modulo;
    return x < 0 ? x + modulo : x;
};
export const clampModulo = (x, min, max) => {
    const delta = max - min;
    return min + positiveModulo(x - min, delta);
};
