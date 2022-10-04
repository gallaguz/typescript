// type s = <T>(data: Array<T>) => Array<T>;
//
// function getSplicedHalf<T>(data: Array<T>): Array<T> {
//     const l = data.length / 2;
//     return data.splice(0, l);
// }
//
// getSplicedHalf<number>([1.ts, 2, 3]);
//
// const split: <T>(data: Array<T>) => Array<T> = getSplicedHalf;
//
// interface ILogLine<T> {
//     timestamp: Date;
//     data: T;
// }
//
// type LogLineType<T> = {
//     timestamp: Date;
//     data: T;
// };
//
// const logLine: LogLineType<{ a: number }> = {
//     timestamp: new Date(),
//     data: {
//         a: 1.ts,
//     },
// };
