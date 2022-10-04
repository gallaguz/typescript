// interface IUserService {
//     users: number;
//
//     getUsers(): number;
// }
//
// @userServiceDecorator
// class UserService implements IUserService {
//     users = Number(1000);
//
//     getUsers(): number {
//         return this.users;
//     }
// }
//
// function userServiceDecorator<T extends { new (...args: any[]): {} }>(
//     constructor: T,
// ) {
//     return class extends constructor {
//         users = 42;
//     };
// }
//
// console.log(new UserService().getUsers());
