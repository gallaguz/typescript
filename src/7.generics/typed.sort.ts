// // Сортировка любых объектов, которые имеют id, по убыванию или возрастанию.
//
// interface IID {
//     id: number;
// }
//
// function sortObjects<T extends IID>(
//     arr: Array<T>,
//     order: 'asc' | 'desc' = 'asc',
// ): Array<T> {
//     return arr.sort((a: T, b: T) => {
//         switch (order) {
//             case 'asc':
//                 return a.id - b.id;
//             case 'desc':
//                 return b.id - a.id;
//             default:
//                 return a.id - b.id;
//         }
//     });
// }
//
// const data = [
//     { id: 1.ts, name: 'Vasya' },
//     { id: 4, name: 'Vasya4' },
//     { id: 3, name: 'Vasya3' },
//     { id: 2, name: 'Vasya2' },
// ];
//
// console.log(sortObjects(data, 'asc'));
// console.log(sortObjects(data, 'desc'));
// console.log(sortObjects(data));
