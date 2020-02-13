export declare class Tween {
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
    constructor(pStartValue: number[], pEndValue: number[], pDurationFrame: number, pUpdateFunction: Function, pEndFunction: Function, pPlay?: boolean);
    Dispose(): void;
    Update(): void;
    play(): void;
    stop(): void;
    rewind(): void;
    nextFrame(): number[];
    executeFrame(pFrame: number): void;
    private nothingUpdateTween;
    reload(): void;
    set easingFunction(value: Function);
    get StartValue(): number[];
    set StartValue(value: number[]);
    get EndValue(): number[];
    set EndValue(value: number[]);
    get DurationFrame(): number;
    set DurationFrame(value: number);
}
//# sourceMappingURL=tween.d.ts.map