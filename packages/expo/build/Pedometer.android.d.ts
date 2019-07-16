declare type PedometerResult = {
    steps: number;
};
declare type PedometerUpdateCallback = (result: PedometerResult) => void;
declare type PedometerListener = {
    remove: () => void;
};
export declare function watchStepCount(callback: PedometerUpdateCallback): PedometerListener;
export declare function getStepCountAsync(start: Date, end: Date): Promise<PedometerResult>;
export declare function isAvailableAsync(): Promise<boolean>;
declare const _default: {
    watchStepCount: typeof watchStepCount;
    getStepCountAsync: typeof getStepCountAsync;
    isAvailableAsync: typeof isAvailableAsync;
};
export default _default;
