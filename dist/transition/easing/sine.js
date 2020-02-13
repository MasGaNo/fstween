"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var memory_math_1 = require("../../utils/memory-math");
exports.TweenEasingSine = {
    easeIn: function (t, b, c, d) {
        return -c * memory_math_1.cos(t / d * (Math.PI / 2.0)) + c + b;
    },
    easeOut: function (t, b, c, d) {
        return c * memory_math_1.sin(t / d * (Math.PI / 2.0)) + b;
    },
    easeInOut: function (t, b, c, d) {
        return -c / 2.0 * (memory_math_1.cos(Math.PI * t / d) - 1.0) + b;
    },
    easeOutIn: function (t, b, c, d) {
        if (t < d / 2.0)
            return exports.TweenEasingSine.easeOut(t * 2.0, b, c / 2.0, d);
        return exports.TweenEasingSine.easeIn((t * 2.0) - d, b + c / 2.0, c / 2.0, d);
    },
};
//# sourceMappingURL=sine.js.map