export namespace CompositeExample {
    export abstract class DeliveryItem {
        items: DeliveryItem[] = [];

        addItem(item: DeliveryItem): void {
            this.items.push(item);
        }

        getItemsPrices(): number {
            return this.items.reduce(
                (acc: number, el: DeliveryItem) => (acc += el.getPrice()),
                0,
            );
        }

        abstract getPrice(): number;
    }

    export class DeliveryShop extends DeliveryItem {
        constructor(private deliveryFee: number) {
            super();
        }

        getPrice(): number {
            return this.getItemsPrices() + this.deliveryFee;
        }
    }

    export class Package extends DeliveryItem {
        getPrice(): number {
            return this.getItemsPrices();
        }
    }

    export class Product extends DeliveryItem {
        constructor(private price: number) {
            super();
        }

        override getPrice(): number {
            return this.price;
        }
    }
}

// main.ts
/**
 import { CompositeExample } from '@app/12.13.14.patterns/2.structural/5.composite/5.composite';

 const { DeliveryShop, DeliveryItem, Product, Package } = CompositeExample;

 const shop = new DeliveryShop(100);
 shop.addItem(new Product(1000));

 const pack1 = new Package();
 pack1.addItem(new Product(1));
 pack1.addItem(new Product(2));

 shop.addItem(pack1);

 const pack2 = new Package();
 pack2.addItem(new Product(3));
 pack2.addItem(new Product(4));

 shop.addItem(pack2);

 console.log(shop.getPrice()); // 1110

 */
