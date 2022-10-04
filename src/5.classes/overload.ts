// interface IUser {
//     name: string;
// }
//
// class User implements IUser {
//     name: string;
//     age: number;
//
//     constructor();
//     constructor(name: string);
//     constructor(age: number);
//     constructor(name: string, age: number);
//     constructor(ageOrName?: string | number, age?: number) {
//         if (typeof ageOrName === 'string') {
//             this.name = ageOrName;
//             if (typeof age === 'number') this.age = age;
//         } else if (typeof ageOrName === 'number') this.age = ageOrName;
//     }
// }
//
// const user = new User('Vasya');
// console.log(user);
// const user2 = new User(34);
// console.log(user2);
// const user3 = new User('Name', 34);
// console.log(user3);
