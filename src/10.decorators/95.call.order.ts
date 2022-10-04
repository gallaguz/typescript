// function Unify(name: string): any {
//     console.log(`Init: ${name}`);
//     return function () {
//         console.log(`Call: ${name}`);
//     };
// }
//
// @Unify('Class 1')
// @Unify('Class 2')
// class MyClass {
//     @Unify('Property 1')
//     props1?: any;
//
//     @Unify('Property 3')
//     props3?: any;
//
//     @Unify('Property 2')
//     props2?: any;
//
//     @Unify('Static Property')
//     static prop2?: any;
//
//     @Unify('Static Method')
//     static method2(@Unify('Static method parameter') _: any): void {}
//
//     @Unify('Method')
//     method(@Unify('Method parameter') _: any): void {}
//
//     constructor(@Unify('Constructor parameter') _: any) {}
// }
// //
// // Init: Property 1
// // Call: Property 1
// // Init: Property 3
// // Call: Property 3
// // Init: Property 2
// // Call: Property 2
// // Init: Method
// // Init: Method parameter
// // Call: Method parameter
// // Call: Method
// // Init: Static Property
// // Call: Static Property
// // Init: Static Method
// // Init: Static method parameter
// // Call: Static method parameter
// // Call: Static Method
// // Init: Class 1
// // Init: Class 2
// // Init: Constructor parameter
// // Call: Constructor parameter
// // Call: Class 2
// // Call: Class 1
