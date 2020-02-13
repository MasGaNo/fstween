import { TweenEasingSine } from './easing/sine';

export class Tween {

  protected startValue: number[];
  protected endValue: number[];
  protected durationFrame: number;
  protected updateFunction: Function;
  protected endFunction: Function;
  protected currFrame: number;
  protected isPlay: boolean;
  protected isGood: boolean;
  protected isRewind: boolean;
  protected method: Function;

  public constructor(pStartValue: number[], pEndValue: number[], pDurationFrame: number, pUpdateFunction: Function, pEndFunction: Function, pPlay: boolean = true) {
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
    this.method = TweenEasingSine.easeOut;
    this.isRewind = false;
  }

  public Dispose(): void {
    this.updateFunction = this.nothingUpdateTween;
    this.endFunction = this.nothingUpdateTween;
  }

  public Update(): void {
    var lArray: number[] = this.nextFrame();
    if ((!this.isRewind && this.currFrame >= this.durationFrame) || (this.isRewind && this.currFrame <= 0)) {
      this.updateFunction(lArray);
      this.endFunction(lArray);
    }
    else {
      this.updateFunction(lArray);
    }
  }

  public play(): void {
    if (!this.isGood)
      return;
    this.isPlay = true;
  }

  public stop(): void {
    if (!this.isGood)
      return;
  }

  public rewind(): void {
    this.isRewind = !this.isRewind;
    this.play();
  }

  public nextFrame(): number[] {
    // A revoir ca.
    // Le ++currFrame ne fait pas commencer trop loin ??? de 1 frame ???
    if (!this.isGood || ((!this.isRewind && ++this.currFrame >= this.durationFrame) || (this.isRewind && --this.currFrame < 0)))
      return this.endValue;
    var lArray: number[] = [];
    for (let i = 0; i < this.startValue.length; ++i) {
      let t: number = this.currFrame;
      let b: number = this.startValue[i];
      let c: number = this.endValue[i] - this.startValue[i];
      let d: number = this.durationFrame;
      lArray.push(this.method(t, b, c, d));
      //lArray.Add(method(currFrame, startValue[i], endValue[i], durationFrame));
    }
    return lArray;
  }

  public executeFrame(pFrame: number): void {
    if (!this.isGood || ((!this.isRewind && pFrame >= this.durationFrame) || (this.isRewind && pFrame <= 0))) {
      this.endFunction(this.endValue);
    }
    else {
      let lArray: number[] = [];
      for (let i = 0; i < this.startValue.length; ++i) {
        let t: number = pFrame;
        let b: number = this.startValue[i];
        let c: number = this.endValue[i] - this.startValue[i];
        let d: number = this.durationFrame;
        lArray.push(this.method(t, b, c, d));
      }
      this.updateFunction(lArray);
    }
  }

  private nothingUpdateTween(pValue: number[]): void {

  }

  public reload(): void {
    this.currFrame = 0;
  }

  public set easingFunction(value: Function) {
    this.method = value;
  }

  public get StartValue(): number[] {
    return this.startValue;
  }
  public set StartValue(value: number[]) {
    {
      this.startValue = value;
    }
  }

  public get EndValue(): number[] {
    return this.endValue;
  }
  public set EndValue(value: number[]) {
    this.endValue = value;
  }

  public get DurationFrame(): number {
    return this.durationFrame;
  }
  public set DurationFrame(value: number) {
    this.durationFrame = value;
    if (this.currFrame > this.durationFrame) {
      this.currFrame = this.durationFrame;
    }
  }



}