import { TweenEasingInterface } from '.';

import { cos, sin } from '../../utils/memory-math';

export const TweenEasingSine: TweenEasingInterface = {

    easeIn(t: number, b: number, c: number, d: number): number {
        return -c * cos(t / d * (Math.PI / 2.0)) + c + b;
    },

    easeOut(t: number, b: number, c: number, d: number): number {
        return c * sin(t / d * (Math.PI / 2.0)) + b;
    },

    easeInOut(t: number, b: number, c: number, d: number): number {
        return -c / 2.0 * (cos(Math.PI * t / d) - 1.0) + b;
    },

    easeOutIn(t: number, b: number, c: number, d: number): number {
        if (t < d / 2.0) return TweenEasingSine.easeOut(t * 2.0, b, c / 2.0, d);
        return TweenEasingSine.easeIn((t * 2.0) - d, b + c / 2.0, c / 2.0, d);
    },


};
