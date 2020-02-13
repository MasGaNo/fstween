"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sine_1 = require("./easing/sine");
var Tween = /** @class */ (function () {
    function Tween(pStartValue, pEndValue, pDurationFrame, pUpdateFunction, pEndFunction, pPlay) {
        if (pPlay === void 0) { pPlay = true; }
        this.isGood = false;
        if (pDurationFrame < 1 || pStartValue.length != pEndValue.length) {
            throw 'Tween is not configured properly.';
        }
        this.isGood = true;
        this.startValue = pStartValue;
        this.endValue = pEndValue;
        this.durationFrame = pDurationFrame;
        //updateFunction = nothingUpdateTween;
        this.updateFunction = pUpdateFunction;
        //endFunction = nothingUpdateTween;
        this.endFunction = pEndFunction;
        if (this.endFunction == null)
            this.isRewind = true;
        this.currFrame = 0;
        this.isPlay = (this.durationFrame > 0) && pPlay;
        this.method = sine_1.TweenEasingSine.easeOut;
        this.isRewind = false;
    }
    Tween.prototype.Dispose = function () {
        this.updateFunction = this.nothingUpdateTween;
        this.endFunction = this.nothingUpdateTween;
    };
    Tween.prototype.Update = function () {
        var lArray = this.nextFrame();
        if ((!this.isRewind && this.currFrame >= this.durationFrame) || (this.isRewind && this.currFrame <= 0)) {
            this.updateFunction(lArray);
            this.endFunction(lArray);
        }
        else {
            this.updateFunction(lArray);
        }
    };
    Tween.prototype.play = function () {
        if (!this.isGood)
            return;
        this.isPlay = true;
    };
    Tween.prototype.stop = function () {
        if (!this.isGood)
            return;
    };
    Tween.prototype.rewind = function () {
        this.isRewind = !this.isRewind;
        this.play();
    };
    Tween.prototype.nextFrame = function () {
        // A revoir ca.
        // Le ++currFrame ne fait pas commencer trop loin ??? de 1 frame ???
        if (!this.isGood || ((!this.isRewind && ++this.currFrame >= this.durationFrame) || (this.isRewind && --this.currFrame < 0)))
            return this.endValue;
        var lArray = [];
        for (var i = 0; i < this.startValue.length; ++i) {
            var t = this.currFrame;
            var b = this.startValue[i];
            var c = this.endValue[i] - this.startValue[i];
            var d = this.durationFrame;
            lArray.push(this.method(t, b, c, d));
            //lArray.Add(method(currFrame, startValue[i], endValue[i], durationFrame));
        }
        return lArray;
    };
    Tween.prototype.executeFrame = function (pFrame) {
        if (!this.isGood || ((!this.isRewind && pFrame >= this.durationFrame) || (this.isRewind && pFrame <= 0))) {
            this.endFunction(this.endValue);
        }
        else {
            var lArray = [];
            for (var i = 0; i < this.startValue.length; ++i) {
                var t = pFrame;
                var b = this.startValue[i];
                var c = this.endValue[i] - this.startValue[i];
                var d = this.durationFrame;
                lArray.push(this.method(t, b, c, d));
            }
            this.updateFunction(lArray);
        }
    };
    Tween.prototype.nothingUpdateTween = function (pValue) {
    };
    Tween.prototype.reload = function () {
        this.currFrame = 0;
    };
    Object.defineProperty(Tween.prototype, "easingFunction", {
        set: function (value) {
            this.method = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tween.prototype, "StartValue", {
        get: function () {
            return this.startValue;
        },
        set: function (value) {
            {
                this.startValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tween.prototype, "EndValue", {
        get: function () {
            return this.endValue;
        },
        set: function (value) {
            this.endValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tween.prototype, "DurationFrame", {
        get: function () {
            return this.durationFrame;
        },
        set: function (value) {
            this.durationFrame = value;
            if (this.currFrame > this.durationFrame) {
                this.currFrame = this.durationFrame;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Tween;
}());
exports.Tween = Tween;
//# sourceMappingURL=tween.js.map