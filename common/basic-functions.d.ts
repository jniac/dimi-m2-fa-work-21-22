export declare const clamp01: (x: number) => number;
export declare const clamp: (x: number, min?: number, max?: number) => number;
export declare const lerp: (a: number, b: number, t: number) => number;
export declare const lerpUnclamped: (a: number, b: number, t: number) => number;
export declare const inverseLerp: (a: number, b: number, t: number) => number;
export declare const inverseLerpUnclamped: (a: number, b: number, t: number) => number;
export declare const remap: (inMin: number, inMax: number, outMin: number, outMax: number, x: number) => number;
export declare const remapUnclamped: (inMin: number, inMax: number, outMin: number, outMax: number, x: number) => number;
export declare const floor: (x: number, base?: number) => number;
export declare const ceil: (x: number, base?: number) => number;
export declare const round: (x: number, base?: number) => number;
export declare const positiveModulo: (x: number, modulo: number) => number;
export declare const clampModulo: (x: number, min: number, max: number) => number;
