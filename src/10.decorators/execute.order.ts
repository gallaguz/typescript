// interface IUserService {
//     users: number;
//
//     getUsers(): number;
// }
//
// @setUsers(24)
// @logUsers()
// class UserService implements IUserService {
//     users = Number(1000);
//
//     getUsers(): number {
//         return this.users;
//     }
// }
//
// function setUsers(users: number) {
//     console.log('setUsers: init');
//     return (target: Function) => {
//         console.log('setUsers: run');
//         target.prototype.users = users;
//     };
// }
//
// function logUsers() {
//     console.log('logUsers: init');
//     return (target: Function) => {
//         console.log('logUsers: run');
//         console.log(target);
//     };
// }
//
// console.log(new UserService().getUsers());
