// enum PaymentStatus {
//     Holded,
//     Processed,
//     Reversed,
// }
//
// interface IPayment {
//     id: number;
//     status: PaymentStatus;
//     createdAt: Date;
//     updatedAt: Date;
// }
//
// class Payment implements IPayment {
//     id: number;
//     status: PaymentStatus = PaymentStatus.Holded;
//     createdAt: Date = new Date();
//     updatedAt: Date;
//
//     constructor(id: number) {
//         this.id = id;
//     }
//
//     getPaymentLifeTime(): number {
//         return new Date().getTime() - this.createdAt.getTime();
//     }
//
//     unHoldPayment(): void {
//         if (this.status === PaymentStatus.Processed) {
//             throw new Error('Cant return Payment');
//         }
//         this.status = PaymentStatus.Reversed;
//         this.updatedAt = new Date();
//     }
// }
//
// const payment = new Payment(1.ts);
// payment.unHoldPayment();
// const lifeTime = payment.getPaymentLifeTime();
// console.log(payment, lifeTime);
