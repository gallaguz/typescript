// function toString<T>(data: T): string | undefined {
//     if (Array.isArray(data)) return data.toString();
//
//     switch (typeof data) {
//         case 'string':
//             return data;
//         case 'function':
//         case 'number':
//         case 'bigint':
//         case 'symbol':
//         case 'boolean':
//             return data.toString();
//         case 'object':
//             return JSON.stringify(data);
//
//         default:
//             return undefined;
//     }
// }
//
// console.log(toString(42));
// console.log(toString('one'));
// console.log(toString([42]));
// console.log(toString(['one']));
// console.log(toString(null));
// console.log(toString(false));
// console.log(toString({ 42: 'forty two' }));
//
// console.log(Number(42).toString());
