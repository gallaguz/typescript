// type Constructor = new (...args: any[]) => {};
//
// type GConstructor<T = {}> = new (...args: any[]) => T;
//
// class List {
//     constructor(public items: string[]) {}
// }
//
// class Accordion {
//     isOpened: boolean;
// }
//
// type ListType = GConstructor<List>;
// type AccordionType = GConstructor<Accordion>;
//
// class AccordionList {
//     isOpened: boolean;
//     constructor(public items: string[]) {}
// }
//
// function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
//     return class ExtendedList extends Base {
//         first(): string | undefined {
//             return this.items[0];
//         }
//     };
// }
//
// const list = ExtendedList(AccordionList);
// const res = new list(['first', 'second']);
//
// console.log(res.first());
