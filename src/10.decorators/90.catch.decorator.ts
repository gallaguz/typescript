// interface IUserService {
//     users: number;
//
//     getUsers(): number;
// }
//
// class UserService implements IUserService {
//     users = Number(1000);
//
//     @Catch({ rethrow: true })
//     getUsers(): number {
//         throw new Error('Error...');
//     }
// }
//
// function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
//     return (
//         target: Object,
//         _: string | symbol, // propertyKey: string | symbol,
//         descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
//     ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
//         const method = descriptor.value;
//
//         descriptor.value = (...args: any[]): void => {
//             try {
//                 return method?.apply(target, args);
//             } catch (e) {
//                 if (e instanceof Error) {
//                     console.log(e.message);
//                     if (rethrow) throw e;
//                 }
//             }
//         };
//     };
// }
//
// const userService = new UserService();
// console.log(userService.getUsers());
