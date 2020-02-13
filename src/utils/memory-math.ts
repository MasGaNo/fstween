function init() {
  for (var i: number = 0; i < TRIGO_PI; i += 0.001) {
    var lVal: number = Math.round(i * 1000) / 1000;
    cosList[lVal] = Math.cos(lVal);
    sinList[lVal] = Math.sin(lVal);

    atan2List[lVal] = {};

    /*for (let j: number = 0; i < TRIGO_PI; j += 0.001) {
        let lVal2: number = Math.round(j * 1000) / 1000;
        atan2List[lVal][lVal2] = Math.atan2(lVal, lVal2);
    }*/

  }
}

export function cos(d: number): number {
  d = Math.round((d % TRIGO_PI) * 1000) / 1000;
  if (!(d in cosList)) {
    cosList[d] = Math.cos(d);
    //console.error(d);
    //debugger;
  }
  return cosList[d];
}

export function sin(d: number): number {
  d = Math.round((d % TRIGO_PI) * 1000) / 1000;
  if (!(d in sinList)) {
    sinList[d] = Math.sin(d);
    // console.error(d);
    //debugger;
  }
  return sinList[d];
}

export function atan2(d: number, d2: number): number {
  d = Math.round((d % TRIGO_PI) * 1000) / 1000;
  d2 = Math.round((d2 % TRIGO_PI) * 1000) / 1000;
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

var cosList: { [value: number]: number } = {};
var sinList: { [value: number]: number } = {};
var atan2List: { [value: number]: { [value: number]: number } } = {};

export const PI: number = 3.14159265;
export const TRIGO_PI: number = PI * 2;
export const PI2: number = PI * 2;
export const PID2: number = PI / 2;
export const PI3D2: number = PI / 2 * 3;
export const Deg2Rad: number = 0.0174533;
export const Rad2Deg: number = 57.2958;

init();
