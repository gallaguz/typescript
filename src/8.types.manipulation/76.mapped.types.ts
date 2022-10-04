// type Modifier = 'read' | 'update' | 'create';
//
// type UserRoles = {
//     customers?: Modifier;
//     projects?: Modifier;
//     adminPanel: Modifier;
// };
//
// // можно добавит union или/и conditional types
// type ModifierToAccess<Type> = {
//     // +readonly [Property in keyof Type as Exclude<
//     //     `${string & Property}`,
//     //     'adminPanel'
//     // >]-?: boolean; // Exclude adminPanel, make all readonly
//
//     [Property in keyof Type]: boolean;
//     // [Property in keyof Type as `canAccess${string & Property}`]: boolean; // rename: canAccesscustomers
//     // [Property in keyof Type as Exclude<
//     //     `canAccess${string & Property}`,
//     //     'canAccessadminPanel'
//     // >]: boolean; // Exclude adminPanel
//     // [Property in keyof Type]+?: boolean; // +? все свойства обязательны
//     // [Property in keyof Type]-?: boolean; // -? все свойства не обязательны
//     // +readonly [Property in keyof Type]: boolean; // +readonly добавление readonly ко всем полям
// };
//
// type UserAccess = {
//     customers?: boolean;
//     projects?: boolean;
//     adminPanel?: boolean;
// };
//
// type UserAccess2 = ModifierToAccess<UserRoles>;
