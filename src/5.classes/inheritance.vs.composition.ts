// class User {
//     name = 'user';
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// // Bad
// class Users extends Array<User> {
//     searchByName(name: string) {
//         return this.filter((u) => u.name === name);
//     }
//
//     override toString(): string {
//         return this.map((u) => u.name).join(', ');
//     }
// }
//
// const users = new Users();
// users.push(new User('Vasya'));
// users.push(new User('Petya'));
// console.log(users.toString());
//
// // Good
// class UserList {
//     users: User[];
//
//     push(u: User): number {
//         return this.users.push(u);
//     }
// }
//
// class Payment {
//     date: Date;
// }
//
// // Bad
// class UserWithPayment extends Payment {
//     name: string;
// }
//
// // Good
// class UserWithPayment2 {
//     user: User;
//     payment: Payment;
//
//     constructor(user: User, payment: Payment) {
//         this.user = user;
//         this.payment = payment;
//     }
// }
