// interface IUserService {}
//
// class UserService implements IUserService {
//     private _users: number;
//
//     // Декоратор аксессора можно использовать как на гет,
//     // так и на сет аксессоре. Но нельзя сразу на двух.
//     // Такой декоратор ведёт себя одинаково на гет/сет
//     @Log()
//     set users(count: number) {
//         this._users = count;
//     }
//
//     get users(): number {
//         return this._users;
//     }
// }
//
// function Log() {
//     return (
//         target: Object,
//         _: string | symbol,
//         descriptor: PropertyDescriptor,
//     ): void => {
//         const set = descriptor.set;
//
//         descriptor.set = (...args: any): void => {
//             console.log(args);
//             set?.apply(target, args);
//         };
//     };
// }
//
// const userService = new UserService();
// console.log('init', userService);
// userService.users = 42;
// console.log('set 42: ', userService.users);
