// interface IUserService {
//     users: number;
//
//     getUsers(): number;
// }
//
// class UserService implements IUserService {
//     users = Number(1000);
//
//     @Log()
//     getUsers(): number {
//         throw new Error('Error...');
//     }
// }
//
// function Log() {
//     return (
//         target: Object,
//         propertyKey: string | symbol,
//         descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
//     ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//         console.log('target', target);
//         // target {}
//         console.log('propertyKey', propertyKey);
//         // propertyKey getUsers
//         console.log('descriptor', descriptor);
//         // descriptor {
//         //     value: [Function: getUsers],
//         //     writable: true,
//         //     enumerable: false,
//         //     configurable: true
//         // }
//
//         // Сохранение пред идущего состояния метола
//         const oldValue = descriptor.value;
//
//         // Переопределение метода
//         descriptor.value = (): void => {
//             console.log('No error');
//             if (oldValue) {
//                 // Вызов старого метода
//                 oldValue();
//             }
//         };
//     };
// }
//
// const userService = new UserService().getUsers();
// console.log(userService);
