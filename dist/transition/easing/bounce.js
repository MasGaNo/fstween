"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweenEasingBounce = {
    easeIn: function (t, b, c, d) {
        return c - exports.TweenEasingBounce.easeOut(d - t, 0, c, d) + b;
    },
    easeOut: function (t, b, c, d) {
        if ((t /= d) < (1.0 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        if (t < (2.0 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    },
    easeInOut: function (t, b, c, d) {
        if (t < d / 2.0)
            return exports.TweenEasingBounce.easeIn(t * 2.0, 0, c, d) * 0.5 + b;
        return exports.TweenEasingBounce.easeOut(t * 2.0 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    },
    easeOutIn: function (t, b, c, d) {
        if (t < d / 2.0)
            return exports.TweenEasingBounce.easeOut(t * 2.0, b, c / 2.0, d);
        return exports.TweenEasingBounce.easeIn((t * 2.0) - d, b + c / 2.0, c / 2.0, d);
    },
};
//# sourceMappingURL=bounce.js.map