export namespace ProxyExample {
    export interface IPaymentDetail {
        id: number;
        sum: number;
    }

    export interface IPaymentAPI {
        getPaymentDetail(id: number): IPaymentDetail | undefined;
    }

    export class PaymentAPI implements IPaymentAPI {
        private data = [{ id: 1, sum: 10000 }];
        getPaymentDetail(id: number): ProxyExample.IPaymentDetail | undefined {
            return this.data.find((d) => d.id === id);
        }
    }

    export class PaymentAccessProxy implements IPaymentAPI {
        constructor(private api: PaymentAPI, private userId: number) {}

        getPaymentDetail(id: number): ProxyExample.IPaymentDetail | undefined {
            if (this.userId === 1) {
                return this.api.getPaymentDetail(id);
            }
            console.log('Attempt get payment data!');
            return undefined;
        }
    }
}

// main.ts
/**
 import { ProxyExample } from '@app/12.13.14.patterns/2.structural/4.proxy/4.proxy';

 const { PaymentAccessProxy, PaymentAPI } = ProxyExample;

 const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
 console.log(proxy.getPaymentDetail(1));

 const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
 console.log(proxy2.getPaymentDetail(1));

 */
