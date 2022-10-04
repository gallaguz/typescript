// const a: number = Math.random() > 0.5 ? 1.ts : 0;
//
// interface HTTPResponse<T extends 'success' | 'failed'> {
//     code: number;
//     data: T extends 'success' ? string : Error;
// }
//
// const success: HTTPResponse<'success'> = {
//     code: 200,
//     data: 'done',
// };
//
// const error: HTTPResponse<'failed'> = {
//     code: 200,
//     data: new Error(),
// };
//
// class User {
//     id: number;
//     name: string;
// }
//
// class UserPersisted extends User {
//     dbId: number;
// }
//
// //
// function getUser(id: number): User;
// function getUser(dbId: string): UserPersisted;
// function getUser(dbIdOrId: string | number): User | UserPersisted {
//     if (typeof dbIdOrId === 'number') return new User();
//     else return new UserPersisted();
// }
//
// //
//
// type UserOrUserPersisted<T extends string | number> = T extends number
//     ? User
//     : UserPersisted;
//
// function getUser2<T extends string | number>(id: T): UserOrUserPersisted<T> {
//     if (typeof id === 'number') return new User() as UserOrUserPersisted<T>;
//     else return new UserPersisted();
// }
//
// const res1 = getUser2(1.ts);
// const res2 = getUser2('string');
