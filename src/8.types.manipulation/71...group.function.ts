// /**
//  *  Необходимо написать функцию группировки, которая принимает массив объектов
//  *  и его ключ, производит группировку по указанному ключу и возвращает
//  *  сгруппированный объект.
//  */
//
// interface IData {
//     group: number;
//     name: string;
// }
//
// interface IGroup<T> {
//     [key: string]: T[];
// }
//
// type Key = string | number | symbol;
//
// function group<T extends Record<Key, any>>(arr: T[], key: keyof T): IGroup<T> {
//     return arr.reduce<IGroup<T>>((acc: IGroup<T>, el: T) => {
//         (acc[el[key]] = acc[el[key]] || []).push(el);
//         return acc;
//     }, {});
//
//     // return arr.reduce<IGroup<T>>((map: IGroup<T>, item: T) => {
//     //     console.log(key, item[key]);
//     //     const itemKey = item[key];
//     //     let curItem = map[itemKey];
//     //
//     //     if (Array.isArray(curItem)) curItem.push(item);
//     //     else curItem = [item];
//     //
//     //     map[itemKey] = curItem;
//     //
//     //     return map;
//     // }, {});
// }
//
// const data: IData[] = [
//     { group: 1.ts, name: 'a' },
//     { group: 2, name: 'a' },
//     { group: 1.ts, name: 'b' },
//     { group: 2, name: 'b' },
//     { group: 3, name: 'a' },
// ];
//
// console.log(group(data, 'group'));
// console.log(group(data, 'name'));
