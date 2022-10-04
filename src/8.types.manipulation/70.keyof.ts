// interface IUser {
//     name: string;
//     age: number;
// }
//
// type KeyOfUser = keyof IUser;
//
// const key: KeyOfUser = 'age';
//
// function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
//
// const user: IUser = {
//     name: 'Vasya',
//     age: 34,
// };
//
// const userName = getValue(user, 'name');
// console.log(userName);
