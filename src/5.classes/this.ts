// class Payment {
//     private date: Date = new Date();
//
//     // Необходим параметр на вход this
//     // Что-бы указать явно необходимость работать
//     // с контекстом этого объекта
//     // Используется контекст исполнения
//     getDate(this: Payment): Date {
//         return this.date;
//     }
//
//     // Контекст привязан к стрелочной ф-и
//     // Используется семантический контекст
//     getDateArrow = (): Date => {
//         return this.date;
//     };
// }
//
// const payment = new Payment();
//
// const user = {
//     id: 1.ts,
//     // Необходимо забиндить контекст объекта
//     paymentDate: payment.getDate.bind(payment),
//     paymentDateArrow: payment.getDateArrow,
// };
//
// console.log(payment.getDate());
// console.log(user.paymentDate());
// console.log(user.paymentDateArrow());
//
// class PaymentPersistent extends Payment {
//     save(): Date {
//         return super.getDate();
//     }
//
//     // TypeError: (intermediate value).getDateArrow is not a function
//     // В прототипе Payment не будет стрелочной ф-и
//     // Поскольку движок так работает с function expression
//     // TODO need more explain
//     saveArrow(): Date {
//         return super.getDateArrow();
//     }
//
//     saveArrowWithThis(): Date {
//         return this.getDateArrow();
//     }
// }
//
// console.log(new PaymentPersistent().save());
// console.log(new PaymentPersistent().saveArrowWithThis());
//
// class UserBuilder {
//     name: string;
//
//     setName(name: string): this {
//         this.name = name;
//         return this;
//     }
//
//     // typeGuard
//     isAdmin(): this is AdminBuilder {
//         return this instanceof AdminBuilder;
//     }
// }
//
// class AdminBuilder extends UserBuilder {
//     roles: string[];
// }
// const user2 = new UserBuilder().setName('Vasya');
// const admin2 = new AdminBuilder().setName('Vasya');
//
// const user3: UserBuilder | AdminBuilder = new UserBuilder();
//
// // Объекты должны отличатся
// // typeGuard в рантайме не сработает, если объекты одинаковые по структуре
// if (user3.isAdmin()) console.log(user3); // AdminBuilder
// else console.log(user3); // UserBuilder
