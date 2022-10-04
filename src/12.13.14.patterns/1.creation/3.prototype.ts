// interface Prototype<T> {
//     clone(): T;
// }
//
// class UserHistory implements Prototype<UserHistory> {
//     createdAt: Date;
//
//     constructor(public email: string, public name: string) {
//         this.createdAt = new Date();
//     }
//
//     clone(): UserHistory {
//         const target = new UserHistory(this.name, this.email);
//         target.createdAt = this.createdAt;
//         return target;
//     }
// }
//
// const user = new UserHistory('a@a.com', 'Vasya');
// console.log(user);
// const user2 = user.clone();
// user2.email = 'b@b.com';
// console.log(user2);
// console.log(user);
