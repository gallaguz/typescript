// class Delivery {
//     public date: Date;
//
//     constructor(date: Date) {
//         this.date = date;
//     }
// }
//
// class HomeDelivery extends Delivery {
//     public address: string;
//
//     constructor(date: Date, address: string) {
//         super(date);
//         this.address = address;
//     }
// }
//
// class ShopDelivery extends Delivery {
//     public shopId: number;
//
//     constructor(shopId: number) {
//         super(new Date());
//         this.shopId = shopId;
//     }
// }
//
// type DeliveryOptions = HomeDelivery | ShopDelivery;
//
// class Product {
//     public id: number;
//     public price: number;
//     public title: string;
//
//     constructor(id: number, price: number, title: string) {
//         this.id = id;
//         this.price = price;
//         this.title = title;
//     }
// }
//
// class Cart {
//     private products: Product[] = [];
//     private delivery: DeliveryOptions;
//
//     public addProduct(product: Product): number {
//         return this.products.push(product);
//     }
//
//     public deleteProduct(productId: number): void {
//         this.products = this.products.filter(
//             (p: Product) => p.id !== productId,
//         );
//     }
//
//     public setDelivery(delivery: DeliveryOptions): void {
//         this.delivery = delivery;
//     }
//
//     public getSum(): number {
//         if (!this.products.length) throw new Error('No Products');
//         return this.products
//             .map((p: Product) => p.price)
//             .reduce((acc: number, el: number) => acc + el);
//     }
//
//     public checkout(): boolean {
//         if (!this.products.length) throw new Error('No Products');
//         if (!this.delivery) throw new Error('No Delivery Address');
//         return true;
//     }
// }
//
// const cart = new Cart();
// cart.addProduct(new Product(1.ts, 10, 'Cookie'));
// cart.addProduct(new Product(2, 20, 'Milk'));
// cart.addProduct(new Product(3, 30, 'Bread'));
// cart.addProduct(new Product(4, 40, 'Bear'));
// console.log(cart);
// cart.deleteProduct(1.ts);
// console.log(cart);
// cart.setDelivery(new HomeDelivery(new Date(), 'address'));
// console.log(cart);
// console.log(cart.getSum());
// console.log(cart.checkout());
