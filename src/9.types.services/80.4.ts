// interface IUser {
//     name: string;
//     age?: number;
//     email: string;
// }
//
// // Делает все поля только для чтения и обязательными
// type readonlyAndRequired = Required<Readonly<IUser>>;
//
// class User implements IUser {
//     readonly name: string;
//     readonly age: number;
//     readonly email: string;
// }
//
// const lol: readonlyAndRequired = new User();
