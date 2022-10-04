// interface IUserService {
//     users: number;
//
//     getUsers(): number;
// }
//
// @setUsersAdvanced(24)
// class UserService implements IUserService {
//     users = Number(1000);
//
//     getUsers(): number {
//         return this.users;
//     }
// }
//
// function setUsersAdvanced(users: number) {
//     return <T extends { new(...args: any[]): {} }>(constructor: T) => {
//         return class extends constructor {
//             users = users;
//         };
//     };
// }
//
// console.log(new UserService().getUsers());
