// interface ILogger {
//     log(...args: any[]): void;
//     error(...args: any[]): void;
// }
//
// class Logger implements ILogger {
//     error(...args: any[]): void {
//         console.log(...args);
//     }
//
//     log(...args: any[]): void {
//         console.log(...args);
//     }
// }
//
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
// interface IPayable {
//     pay(paymentId: number): void;
//     price?: number;
// }
//
// class User implements IPayable {
//     pay(paymentId: number): void {
//         //
//     }
// }
