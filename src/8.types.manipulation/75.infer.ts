// function runTransaction(transaction: { fromTo: [string, string] }): void {
//     console.log(transaction);
// }
// const transaction: GetFirstArg<typeof runTransaction> = {
//     from: ['1.ts', '2'],
// };
//
// runTransaction(transaction);
//
// type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any
//     ? First
//     : never;
