// import 'reflect-metadata';
//
// const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');
//
// interface IUserService {
//     getUsers(): number;
// }
//
// class UserService implements IUserService {
//     private _users: number;
//
//     getUsers(): number {
//         return this._users;
//     }
//
//     @Validate()
//     setUsers(@Positive() num: number): void {
//         this._users = num;
//     }
// }
//
// function Validate() {
//     return (
//         target: Object,
//         propertyKey: string | symbol,
//         descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
//     ): void => {
//         const method = descriptor.value;
//         descriptor.value = function (
//             ...args: any
//         ): ((...args: any[]) => any) | undefined {
//             const positiveParams: number[] = Reflect.getOwnMetadata(
//                 POSITIVE_METADATA_KEY,
//                 target,
//                 propertyKey,
//             );
//             if (positiveParams) {
//                 for (const index of positiveParams) {
//                     if (args[index] < 0) {
//                         throw new Error('Number must be > 0');
//                     }
//                 }
//             }
//             return method?.apply(this, args);
//         };
//     };
// }
//
// function Positive() {
//     return (
//         target: Object,
//         propertyKey: string | symbol,
//         parameterIndex: number, // parameterIndex: number,
//     ): void => {
//         // console.log(
//         //     'design:type',
//         //     Reflect.getOwnMetadata('design:type', target, propertyKey),
//         // );
//         // console.log(
//         //     'design:paramtypes',
//         //     Reflect.getOwnMetadata(
//         //         'design:paramtypes',
//         //         target,
//         //         propertyKey,
//         //     ),
//         // );
//         // console.log(
//         //     'design:returntype',
//         //     Reflect.getOwnMetadata(
//         //         'design:returntype',
//         //         target,
//         //         propertyKey,
//         //     ),
//         // );
//
//         const existParams: number[] =
//             Reflect.getOwnMetadata(
//                 POSITIVE_METADATA_KEY,
//                 target,
//                 propertyKey,
//             ) || [];
//
//         existParams.push(parameterIndex);
//
//         Reflect.defineMetadata(
//             POSITIVE_METADATA_KEY,
//             existParams,
//             target,
//             propertyKey,
//         );
//     };
// }
//
// const userService = new UserService();
// console.log('init', userService);
// userService.setUsers(10);
// console.log('set 10', userService);
// // userService.setUsers(-1);
// // console.log('set -1', userService);
