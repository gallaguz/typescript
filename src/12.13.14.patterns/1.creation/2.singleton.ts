class MyMap {
    private static instance: MyMap;

    map: Map<number, string> = new Map();

    // Приватный, что бы нельзя было создать объект
    private constructor() {}

    clean(): void {
        this.map = new Map();
    }

    public static get(): MyMap {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}
//
// class Service1 {
//     addMap(key: number, val: string): void {
//         const myMap = MyMap.get();
//         myMap.map.set(key, val);
//     }
// }
//
// class Service2 {
//     getKeys(key: number): void {
//         const myMap = MyMap.get();
//         myMap.map.get(key);
//         console.log(myMap.map.get(key));
//         myMap.clean();
//         console.log(myMap.map.get(key));
//     }
// }
//
// new Service1().addMap(1, 'Its Alive');
// new Service2().getKeys(1);
