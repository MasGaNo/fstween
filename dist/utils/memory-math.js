"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function init() {
    for (var i = 0; i < exports.TRIGO_PI; i += 0.001) {
        var lVal = Math.round(i * 1000) / 1000;
        cosList[lVal] = Math.cos(lVal);
        sinList[lVal] = Math.sin(lVal);
        atan2List[lVal] = {};
        /*for (let j: number = 0; i < TRIGO_PI; j += 0.001) {
            let lVal2: number = Math.round(j * 1000) / 1000;
            atan2List[lVal][lVal2] = Math.atan2(lVal, lVal2);
        }*/
    }
}
function cos(d) {
    d = Math.round((d % exports.TRIGO_PI) * 1000) / 1000;
    if (!(d in cosList)) {
        cosList[d] = Math.cos(d);
        //console.error(d);
        //debugger;
    }
    return cosList[d];
}
exports.cos = cos;
function sin(d) {
    d = Math.round((d % exports.TRIGO_PI) * 1000) / 1000;
    if (!(d in sinList)) {
        sinList[d] = Math.sin(d);
        // console.error(d);
        //debugger;
    }
    return sinList[d];
}
exports.sin = sin;
function atan2(d, d2) {
    d = Math.round((d % exports.TRIGO_PI) * 1000) / 1000;
    d2 = Math.round((d2 % exports.TRIGO_PI) * 1000) / 1000;
    if (!(d in atan2List)) {
        atan2List[d] = {};
        //console.error(d);
        //debugger;
    }
    if (!(d2 in atan2List[d])) {
        atan2List[d][d2] = Math.atan2(d, d2);
        //console.error(d2);
        //debugger;
    }
    return atan2List[d][d2];
}
exports.atan2 = atan2;
var cosList = {};
var sinList = {};
var atan2List = {};
exports.PI = 3.14159265;
exports.TRIGO_PI = exports.PI * 2;
exports.PI2 = exports.PI * 2;
exports.PID2 = exports.PI / 2;
exports.PI3D2 = exports.PI / 2 * 3;
exports.Deg2Rad = 0.0174533;
exports.Rad2Deg = 57.2958;
init();
//# sourceMappingURL=memory-math.js.map