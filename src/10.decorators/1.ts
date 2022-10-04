// interface IUserService {
//     users: number;

//     getUsers(): number;
// }

// class UserService implements IUserService {
//     users = Number(1000);

//     getUsers(): number {
//         return this.users;
//     }
// }

// function nullUser(obj: IUserService): IUserService {
//     obj.users = 0;

//     return obj;
// }

// function logUser(obj: IUserService): IUserService {
//     console.log('Users:', obj.users);

//     return obj;
// }

// console.log(new UserService().getUsers());
// console.log(nullUser(new UserService()).getUsers());
// console.log(logUser(nullUser(new UserService())).getUsers());
