// interface IUserService {
//     users: number;
//
//     getUsers(): number;
// }
//
// @CreatedAt()
// class UserService implements IUserService {
//     users = Number(1000);
//
//     getUsers(): number {
//         return this.users;
//     }
// }
//
// // { new (...args: any[]): {} } - конфигурируемый класс
//
// function CreatedAt() {
//     return <T extends { new (...args: any[]): {} }>(constructor: T): T => {
//         return class extends constructor {
//             createdAt = new Date();
//         };
//     };
// }
//
// type CreatedAt = {
//     createdAt: Date;
// };
//
// const userService = new UserService() as IUserService & CreatedAt;
//
// console.log(userService.createdAt);
