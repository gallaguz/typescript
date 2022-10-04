// const a: Array<number> = [1.ts, 2, 3];
//
// async function test(): Promise<void> {
//     const b = await new Promise<number>((resolve) => {
//         resolve(1.ts);
//     });
// }
//
// const check: Record<string, boolean> = {
//     drive: true,
//     kpp: false,
// };
//
// // function logMiddleware(data: number): number {
// //     console.log(data);
// //     return data;
// // }
//
// function logMiddleware<T>(data: T): T {
//     console.log(data);
//     return data;
// }
//
// const res = logMiddleware(42);
// const res2 = logMiddleware('42');
//
// function getSplicedHalf<T>(data: Array<T>): Array<T> {
//     const l = data.length / 2;
//     return data.splice(0, l);
// }
//
// getSplicedHalf<number>([1.ts, 2, 3]);

//

//

//

//

//

//
// // class
// class ArrayOfAnything<T> {
//     constructor(public collection: T[]) {}
//
//     get(index: number): T | undefined {
//         return this.collection[index];
//     }
// }
//
// const strArr = new ArrayOfAnything<string>(['1', '2', '3']);
// const numbArr = new ArrayOfAnything<number>([1, 2, 3]);
//
// // function
// function printAnyArr<T>(arr: T[]): void {
//     arr.forEach((el) => {
//         console.log(el);
//     });
// }
//
// printAnyArr<string>(['1', '2', '3']);
// printAnyArr<number>([1, 2, 3]);
//
// //
// function fillArr<T>(len: number, elem: T): T[] {
//     return new Array<T>(len).fill(elem);
// }
//
// const arr1 = fillArr<string>(10, '*');
// const arr2 = fillArr<number>(10, 42);
//
// // interface IArray
// interface IArray<T> {
//     concat(...items: Array<T[] | T>): T[];
//     reduce<U>(
//         callback: (state: U, element: T, index: number, array: T[]) => U,
//         fistState?: U,
//     ): U;
// }
//
// // Уточнение параметров
// interface ILength {
//     length: number;
// }
//
// function printLength<T extends ILength>(arg: T): number {
//     return arg.length;
// }
//
// printLength('123');
// printLength({ a: 42, length: 2 });
//
// // K extends keyof T - make union of types from T
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
//
// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
//
// const property = getProperty(myObj, 'c');
