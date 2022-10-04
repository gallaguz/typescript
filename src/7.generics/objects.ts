// class Vehicle {
//     run: number;
// }
//
// function kmToMiles<T extends Vehicle>(vehicle: T): T {
//     vehicle.run = vehicle.run / 0.62;
//     return vehicle;
// }
//
// class SUV extends Vehicle {
//     capacity: number;
// }
//
// const vehicle = kmToMiles(new Vehicle());
// const suv = kmToMiles(new SUV());
// kmToMiles({ run: 1.ts });
//
// function logId<T extends string | number>(id: T): T {
//     console.log(id);
//     return id;
// }
//
// function logId2<T extends string | number, Y>(
//     id: T,
//     data: Y,
// ): { id: T; data: Y } {
//     console.log(id);
//     console.log(data);
//     return { id, data };
// }
