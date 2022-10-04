// interface IUserService {
//     users: number;
//
//     getUsers(): number;
// }
//
// class UserService implements IUserService {
//     @Max(100)
//     users = Number(1000);
//
//     getUsers(): number {
//         throw new Error('Error...');
//     }
// }
//
// function Max(maxUsers: number) {
//     return (target: Object, propertyKey: string | symbol) => {
//         let value: number;
//         const setter = function (newValue: number): void {
//             if (newValue > maxUsers) {
//                 console.log(`Cant be more then ${maxUsers}`);
//                 value = 0;
//             } else {
//                 value = maxUsers;
//             }
//         };
//
//         const getter = function (): number {
//             return value;
//         };
//
//         Object.defineProperty(target, propertyKey, {
//             get: getter,
//             set: setter,
//         });
//     };
// }
//
// const userService = new UserService();
// console.log('init', userService.users);
// userService.users = 1;
// console.log('set 1', userService.users);
// userService.users = 100;
// console.log('set 100', userService.users);
// userService.users = 1000;
// console.log('set 1000', userService.users);
