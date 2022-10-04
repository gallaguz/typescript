// type PaymentStatus = 'new' | 'paid';
//
// class Payment {
//     id: number;
//     status: PaymentStatus = 'new';
//     constructor(id: number) {
//         this.id = id;
//     }
//     pay(): void {
//         this.status = 'paid';
//     }
// }
//
// class PersistedPayment extends Payment {
//     databaseId: number;
//     paidAd: Date;
//
//     constructor() {
//         const id = Math.random();
//         super(id);
//     }
//     save(): void {
//         // save to DB
//     }
//     override pay(date?: Date): void {
//         super.pay();
//         this.status = 'paid';
//         if (date) this.paidAd = date;
//     }
// }
//
// class User {
//     name = 'user';
//
//     constructor() {
//         console.log(this.name);
//     }
// }
//
// class Admin extends User {
//     name = 'admin';
//
//     constructor() {
//         super();
//         console.log(this.name);
//     }
// }
//
// new Admin();
