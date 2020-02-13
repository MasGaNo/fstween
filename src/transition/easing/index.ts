export type TweenEasingFunction = (t: number, b: number, c: number, d: number) => number;

export interface TweenEasingInterface {
  easeIn: TweenEasingFunction;
  easeOut: TweenEasingFunction;
  easeInOut: TweenEasingFunction;
  easeOutIn: TweenEasingFunction;
}
