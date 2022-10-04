// // --- Как получить ключи id и name у класса (с точки зрения типов)
// class User {
//     id: number;
//     name: string;
// }
//
// type UsersKey = keyof User;
// // "id" | "name"
//
// // --- Что делает в типах оператор infer?
// // Вытаскивает тип для последующего использования с Conditional types
//
// // --- Какой Mapped Type написан верно?
// type A<B> = {
//     [K in keyof B]: boolean;
// };
